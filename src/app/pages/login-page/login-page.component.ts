import {Component, inject} from '@angular/core';
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


  form = new FormGroup({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required)
  })

/*  constructor() {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9])// это точка входа в поток
      .pipe(                                   // в pipe передаем преобразователи
        map(val => val * 2),       // кажд эл будет умн на 2
      // take(2)                                // выведет перв 2 эл и ОСТАНОВИТСЯ СТРИМ
      // skip(2)                                // пропускает перв 2 эл и идет дальше
      // delay(1000)                   // после 1 сек начнет консолить
      tap(val =>this.form.patchValue)
      ).subscribe(
      res => console.log(res), // это результат
    )
  }*/

  onSubmit() {
    if (this.form.valid) {
      //@ts-ignore
      this.authService.login(this.form.value).pipe(tap(1)).subscribe(auth => {
        this.router.navigate(['']);
      })
    }
  }
}
