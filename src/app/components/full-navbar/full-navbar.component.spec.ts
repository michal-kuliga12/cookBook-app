import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNavbarComponent } from './full-navbar.component';

describe('FullNavbarComponent', () => {
  let component: FullNavbarComponent;
  let fixture: ComponentFixture<FullNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
