import {Profile} from '../../../data/interfaces/profile.interface';
import {Component, Input} from '@angular/core';
import {ImgUrlPipe} from '../../../helpers/pipes/img-url.pipe';
import {RouterLink, RouterModule} from '@angular/router';

@Component({
  selector: 'app-subscriber-card',
  standalone: true,
  imports: [RouterModule, RouterLink, ImgUrlPipe],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss',
})
export class SubscriberCardComponent {
  @Input() profile!: Profile;
}
