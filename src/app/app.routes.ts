import {Routes} from '@angular/router';
import {LoginPageComponent} from '../app/pages/login-page/login-page.component';
import {SearchPageComponent} from '../app/pages/search-page/search-page.component';
import {ProfilePageComponent} from '../app/pages/profile-page/profile-page.component';
import {LayoutComponent} from '../app/common-ui/layout/layout.component';
import {canActivateAuth} from '../../src/app/auth/access.guard';
import {SettingsPageComponent} from '../../src/app/pages/settings-page/settings-page.component';

export const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {path: '', component: SearchPageComponent},
      {path: 'profile/:id', component: ProfilePageComponent}, //profile/me
      {path: 'settings', component: SettingsPageComponent} //profile/me
    ],canActivate:[canActivateAuth]
  },
  {path: 'login', component: LoginPageComponent},
];


