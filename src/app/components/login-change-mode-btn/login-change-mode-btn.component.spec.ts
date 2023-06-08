import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginChangeModeBtnComponent } from './login-change-mode-btn.component';

describe('LoginChangeModeBtnComponent', () => {
  let component: LoginChangeModeBtnComponent;
  let fixture: ComponentFixture<LoginChangeModeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginChangeModeBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginChangeModeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
