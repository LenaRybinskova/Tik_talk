import {Component, effect, inject} from '@angular/core';
import {ProfileHeaderComponent} from '../../../app/common-ui/profile-header/profile-header.component';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProfileService} from '../../../app/data/services/profile.service';
import {firstValueFrom} from 'rxjs';


@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [ProfileHeaderComponent, ReactiveFormsModule],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent {
  formBuilder = inject(FormBuilder) //
  profileService = inject(ProfileService)

  form = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: [{value:"", disabled:true}, Validators.required],
    description: [''],
    stack: [''],
  })

  constructor(){
    effect(() => { //effect срабат, если сигнал меняется
      //@ts-ignore
      this.form.patchValue(this.profileService.me) //вот это сигнал
    });
  }


  onSave(){
    this.form.markAllAsTouched()
    this.form.updateValueAndValidity()

    if(this.form.invalid) return

    //@ts-ignore
    firstValueFrom(this.profileService.patchProfile(this.form.value))
  }

}
