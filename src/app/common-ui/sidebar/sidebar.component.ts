import { ProfileService } from './../../data/services/profile.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SubscriberCardComponent } from '../../common-ui/sidebar/subscriber-card/subscriber-card.component';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    CommonModule,
    SvgIconComponent,
    SubscriberCardComponent,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  profileService = inject(ProfileService);

  subscribers$ = this.profileService.getSubscribersShortList();

  me = this.profileService.getMe();

  menuItems = [
    { label: 'Моя страница', icon: 'home', link: '' },
    { label: 'Чаты', icon: 'chat', link: '' },
    { label: 'Поиск', icon: 'search', link: '' },
  ];
}
