import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../app/auth/auth.service';
import {delay, from, map, pipe, skip, take, tap} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  authService=inject(AuthService);
  router=inject(Router);
  isShowPassword=signal<boolean>(false)


  form = new FormGroup({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required)
  })


  onSubmit() {
    console.log("onSubmit")
    if (this.form.valid) {
      //@ts-ignore
      this.authService.login(this.form.value).pipe(tap(1)).subscribe(auth => {
        this.router.navigate(['']);
      })
    }
  }
}
