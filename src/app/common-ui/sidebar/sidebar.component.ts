import {ProfileService} from './../../data/services/profile.service';
import {Component, inject} from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe, NgOptimizedImage} from '@angular/common';
import {SvgIconComponent} from '../svg-icon/svg-icon.component';
import {SubscriberCardComponent} from '../../common-ui/sidebar/subscriber-card/subscriber-card.component';
import {RouterLink, RouterModule} from '@angular/router';
import {firstValueFrom} from 'rxjs';
import {ImgUrlPipe} from '../../../app/helpers/pipes/img-url.pipe';


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
    ImgUrlPipe,
    NgOptimizedImage,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  profileService = inject(ProfileService);
  subscribers$ = this.profileService.getSubscribersShortList();
  me = this.profileService.me


  menuItems = [
    {label: 'Моя страница', icon: 'home', link: ''},
    {label: 'Чаты', icon: 'chat', link: ''},
    {label: 'Поиск', icon: 'search', link: ''},
  ];

  ngOnInit(): void {
    firstValueFrom(this.profileService.getMe())
  }
}
