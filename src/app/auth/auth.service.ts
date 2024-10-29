import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthData, TokenResponse} from '../../app/auth/auth.interface';
import {tap} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  cookieService = inject(CookieService);
  baseApiUrl = 'https://icherniakov.ru/yt-course/auth/';

  token: string | null = null
  refreshToken: string | null = null

  get isAuth() {
    console.log('метод isAuth')
    if (!this.token) {
      this.token = this.cookieService.get('token1')
    }
    return !!this.token; //true/false
  }

  login(payload: AuthData) {
    const fd = new FormData()

    fd.append('username', payload.username);
    fd.append('password', payload.password);
    return this.http.post<TokenResponse>(`${this.baseApiUrl}token`, fd).pipe(
      tap(val => {
        this.token = val.access_token
        this.refreshToken = val.refresh_token

        this.cookieService.set('token1', this.token)
        this.cookieService.set('refreshToken', this.refreshToken)
      })
    );
  }
}
