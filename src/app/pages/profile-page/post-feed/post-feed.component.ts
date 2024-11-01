import { Component } from '@angular/core';
import {PostInputComponent} from '../../../pages/profile-page/post-input/post-input.component';
import {PostComponent} from '../../../pages/profile-page/post/post.component';

@Component({
  selector: 'app-post-feed',
  standalone: true,
  imports: [PostInputComponent, PostComponent],
  templateUrl: './post-feed.component.html',
  styleUrl: './post-feed.component.scss'
})
export class PostFeedComponent {

}
