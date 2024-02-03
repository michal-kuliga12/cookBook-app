import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Input('formMode') formMode: string = 'login';
  user: UserModel = {
    username: '',
    password: '',
  };
  repeatedPassword: string = '';

  constructor(private accountService: AccountService) {}

  onSubmit(form: NgForm) {
    if (this.formMode == 'login') this.Login();
    else {
      this.CheckIfPasswordIsValid();
      this.Register();
    }
  }

  Login() {
    this.accountService.Login(this.user).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  Register() {
    this.accountService.Register(this.user).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  CheckIfPasswordIsValid() {
    return this.user.password == this.repeatedPassword;
  }
}
