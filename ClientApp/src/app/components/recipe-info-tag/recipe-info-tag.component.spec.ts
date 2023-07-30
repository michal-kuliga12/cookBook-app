import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeInfoTagComponent } from './recipe-info-tag.component';

describe('RecipeInfoTagComponent', () => {
  let component: RecipeInfoTagComponent;
  let fixture: ComponentFixture<RecipeInfoTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeInfoTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeInfoTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
