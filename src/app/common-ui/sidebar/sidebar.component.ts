import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SvgIconComponent} from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

  menuItems=[
    {label:"Моя страница", icon:"home",link:""},
    {label:"Чаты", icon:"chat",link:""},
    {label:"Поиск", icon:"search",link:""},
  ]
}
