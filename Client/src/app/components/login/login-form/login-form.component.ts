import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ILoginAttemptStatuses } from 'src/app/interfaces/ilogin-attempt-statuses';

import { UserLogin } from 'src/app/models/userLogin.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Input('formMode') formMode: string = 'login';
  @Output()
  loginAttemptStatusesEmitting: EventEmitter<ILoginAttemptStatuses> =
    new EventEmitter<ILoginAttemptStatuses>();
  public user: UserLogin = {
    username: '',
    password: '',
  };

  private loginAttemptStatuses: ILoginAttemptStatuses = {
    isLoginSuccess: false,
    isErrorOccured: false,
    errorDescription: '1',
  };

  isSubmitButtonActive: boolean = true;
  repeatedPassword: string = '';
  // TODO Error popup

  constructor(private accountService: AccountService, private router: Router) {}

  onSubmit() {
    this.isSubmitButtonActive = false;
    if (this.formMode == 'login') this.login();
    else {
      this.checkIfPasswordIsValid();
      this.register();
    }
  }
  // FIXME - Statusy przed przesłaniem nie są edytowane z jakiegoś powodu - wykorzystywana jest wartość domyślna

  login() {
    this.accountService
      .login(this.user)
      .pipe(
        finalize(() => {
          this.sendingLoginAttemptStatuses();
          this.isSubmitButtonActive = false;
        })
      )
      .subscribe({
        next: (_) => {
          this.loginAttemptStatuses = {
            isLoginSuccess: true,
            isErrorOccured: false,
            errorDescription: '',
          };
          this.navigateToHomePage();
        },
        error: (error) => {
          this.loginAttemptStatuses = {
            isLoginSuccess: false,
            isErrorOccured: true,
            errorDescription: error.error,
          };
        },
      });
  }

  register() {
    this.accountService
      .register(this.user)
      .pipe(
        finalize(() => {
          this.sendingLoginAttemptStatuses();
        })
      )
      .subscribe({
        next: (_) => {
          this.loginAttemptStatuses = {
            isLoginSuccess: true,
            isErrorOccured: false,
            errorDescription: '',
          };
          this.navigateToHomePage();
        },
        error: (error) => {
          this.loginAttemptStatuses = {
            isLoginSuccess: false,
            isErrorOccured: true,
            errorDescription: error.error,
          };
        },
      });
  }

  navigateToHomePage() {
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 3000);
  }

  checkIfPasswordIsValid() {
    return this.user.password == this.repeatedPassword;
  }

  sendingLoginAttemptStatuses() {
    this.loginAttemptStatusesEmitting.emit(this.loginAttemptStatuses);
  }
}
