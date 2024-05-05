import { Component } from '@angular/core';
import { IconDefinition, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.scss'],
})
export class RecipePreviewComponent {
  public clockIcon: IconDefinition = faClock;
}
