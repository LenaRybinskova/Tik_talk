import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../interfaces/profile.interface';
import {Pageble} from '../interfaces/pageble.interface';
import {map, tap} from 'rxjs';

//Injectable - индикатор

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiUrl = 'https://icherniakov.ru/yt-course/';
  me = signal<Profile | null>(null)


  hh(){
    console.log(this.me)
  }


  getTestAccounts() {

    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`).pipe(
      tap(res => {
        this.me.set(res)
        this.hh();
      })
    );
  }

  getAccount(id: string) {
    return this.http.get<Profile>(`${this.baseApiUrl}account/${id}`);
  }

  getSubscribersShortList(subsAmount:number=3) {
    return this.http.get<Pageble<Profile>>(
      `${this.baseApiUrl}account/subscribers/`
    ).pipe(
      map(res => {
          return res.items.slice(0, subsAmount)// пришел массив, вытащили первые три
        }
      )
    )
  }

  patchProfile(profile:Partial<Profile>) {
    console.log("запрос patchProfile");
    return this.http.patch<Profile>(`${this.baseApiUrl}account/me`, profile);
  }
}
