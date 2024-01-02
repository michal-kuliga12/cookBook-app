import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Input('passedFormMode') currentFormMode: string = 'login';
  constructor() {}

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
