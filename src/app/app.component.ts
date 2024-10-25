import { ProfileService } from './data/services/profile.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from '../app/common-ui/profile-card/profile-card.component';
import { JsonPipe } from '@angular/common';
import { Profile } from '../app/data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent, JsonPipe],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
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
