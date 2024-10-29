import {Component, inject} from '@angular/core';
import {ProfileService} from '../../../app/data/services/profile.service';
import {Profile} from '../../data/interfaces/profile.interface';
import {AppComponent }from "../../../app/app.component"
import {ProfileCardComponent }from "../../common-ui/profile-card/profile-card.component"

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    AppComponent,ProfileCardComponent
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profileService = inject(ProfileService); // profileService - это инстанс Сервиса

  profiles: Profile[] = [];

  constructor() {
    this.profileService
      .getTestAccounts()
      .subscribe((res) => {
        this.profiles = res
      });
  }
}
