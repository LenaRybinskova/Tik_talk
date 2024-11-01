import {Component, inject} from '@angular/core';
import {ProfileHeaderComponent} from '../../../app/common-ui/profile-header/profile-header.component';
import {ProfileService} from '../../data/services/profile.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs';
import {toObservable} from '@angular/core/rxjs-interop';
import {AsyncPipe, NgForOf} from '@angular/common';
import {RouterLink, RouterModule} from '@angular/router';
import {SvgIconComponent} from '../../../app/common-ui/svg-icon/svg-icon.component';
import {SubscriberCardComponent} from '../../../app/common-ui/sidebar/subscriber-card/subscriber-card.component';
import {ImgUrlPipe} from '../../../app/helpers/pipes/img-url.pipe';
import {PostFeedComponent} from '../../pages/profile-page/post-feed/post-feed.component';


@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfileHeaderComponent, AsyncPipe, RouterLink, RouterModule, SvgIconComponent, NgForOf, SubscriberCardComponent, ImgUrlPipe, PostFeedComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  profileService = inject(ProfileService);
  route = inject(ActivatedRoute); //ActivatedRoute сервис для раб с УРЛ
  me$= toObservable(this.profileService.me) //рез getMe() объект Profile
  subscribers$ = this.profileService.getSubscribersShortList(5);

  profile$ = this.route.params // созд поток, он следит за текущ УРЛ :id
    .pipe(
      switchMap(({id}) => { //подменяет его id
        if (id === "me") return this.me$
        return this.profileService.getAccount(id)
      }))
}



