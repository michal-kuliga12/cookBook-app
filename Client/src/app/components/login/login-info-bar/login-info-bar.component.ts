import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-info-bar',
  templateUrl: './login-info-bar.component.html',
  styleUrls: ['./login-info-bar.component.scss'],
})
export class LoginInfoBarComponent {
  @Input() currentFormMode: string = 'login';
}
