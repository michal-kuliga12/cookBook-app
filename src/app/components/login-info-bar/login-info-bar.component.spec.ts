import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInfoBarComponent } from './login-info-bar.component';

describe('LoginInfoBarComponent', () => {
  let component: LoginInfoBarComponent;
  let fixture: ComponentFixture<LoginInfoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginInfoBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
