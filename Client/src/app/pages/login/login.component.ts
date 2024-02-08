import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { ILoginAttemptStatuses } from 'src/app/interfaces/ilogin-attempt-statuses';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  faArrow = faArrowAltCircleLeft;

  currentFormMode: string = 'login';
  loginAttemptStatuses: ILoginAttemptStatuses = {
    isLoginSuccess: false,
    isErrorOccured: false,
    errorDescription: '',
  };

  @ViewChild('loginForm') form!: NgForm;
  constructor(private route: ActivatedRoute) {}

  onCurrentFormModeChanged(newFormMode: string) {
    this.currentFormMode = newFormMode;
  }

  onLoginAttemptStatusesReceiving(loginAttemptStatuses: ILoginAttemptStatuses) {
    this.loginAttemptStatuses = loginAttemptStatuses;
    console.log(this.loginAttemptStatuses);
  }
}
