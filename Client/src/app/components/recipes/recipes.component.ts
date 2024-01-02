import { Component, OnInit } from '@angular/core';
import {
  faBowlFood,
  faBowlRice,
  faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  faPotFood = faPizzaSlice;
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}
  ngOnInit(): void {
    this.recipesService
      .getRecipes()
      .subscribe((result: Recipe[]) => (this.recipes = result));
    console.log(this.recipes);
  }
}
