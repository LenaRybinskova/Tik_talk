import { Component, Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../interfaces/profile.interface';
import { Pageble } from '../interfaces/pageble.interface';
import {map} from 'rxjs';

//Injectable - индикатор

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);

  baseApiUrl = 'https://icherniakov.ru/yt-course/';

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`);
  }

  getAccount(id: string) {
    return this.http.get<Profile>(`${this.baseApiUrl}account/${id}`);
  }

  getSubscribersShortList() {
    return this.http.get<Pageble<Profile>>(
      `${this.baseApiUrl}account/subscribers/`
    ).pipe(
      map(res =>{
         return  res.items.slice(0,3)// пришел массив, вытащили первые три
      }
      )
    )
  }
}
