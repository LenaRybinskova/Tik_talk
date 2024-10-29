import {Routes} from '@angular/router';
import {LoginPageComponent} from '../app/pages/login-page/login-page.component';
import {SearchPageComponent} from '../app/pages/search-page/search-page.component';
import {ProfilePageComponent} from '../app/pages/profile-page/profile-page.component';
import {LayoutComponent} from '../app/common-ui/layout/layout.component';
import {canActivateAuth} from '../../src/app/auth/access.guard';

export const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {path: '', component: SearchPageComponent},
      {path: 'profile', component: ProfilePageComponent}
    ],canActivate:[canActivateAuth]
  },
  {path: 'login', component: LoginPageComponent},
];
