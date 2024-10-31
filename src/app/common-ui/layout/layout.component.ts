import {Component} from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
}
