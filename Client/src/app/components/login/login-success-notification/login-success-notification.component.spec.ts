import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuccessNotificationComponent } from './login-success-notification.component';

describe('LoginSuccessNotificationComponent', () => {
  let component: LoginSuccessNotificationComponent;
  let fixture: ComponentFixture<LoginSuccessNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSuccessNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSuccessNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
