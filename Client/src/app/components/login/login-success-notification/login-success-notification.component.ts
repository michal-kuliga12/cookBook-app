import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ILoginAttemptStatuses } from 'src/app/interfaces/ilogin-attempt-statuses';

@Component({
  selector: 'app-login-success-notification',
  templateUrl: './login-success-notification.component.html',
  styleUrls: ['./login-success-notification.component.scss'],
})
export class LoginSuccessNotificationComponent implements OnChanges {
  @Input('formMode') formMode: string = 'login';
  @Input() loginAttemptStatuses: ILoginAttemptStatuses;

  constructor() {
    this.loginAttemptStatuses = {
      isLoginSuccess: false,
      isErrorOccured: false,
      errorDescription: '',
    };
  }

  ngOnChanges(): void {
    console.log(this.loginAttemptStatuses);
  }
}
