import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-change-mode-btn',
  templateUrl: './login-change-mode-btn.component.html',
  styleUrls: ['./login-change-mode-btn.component.scss'],
})
export class LoginChangeModeBtnComponent {
  currentFormMode: string = 'login';

  @Output()
  currentFormModeChanged: EventEmitter<string> = new EventEmitter<string>();

  toggleModeToLoginOrRegister() {
    if (this.currentFormMode === 'login') {
      this.currentFormMode = 'register';
    } else {
      this.currentFormMode = 'login';
    }
    this.onCurrentFormModeChanged();
  }
  onCurrentFormModeChanged() {
    this.currentFormModeChanged.emit(this.currentFormMode);
  }
}
