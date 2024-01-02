import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  recipe?: Recipe = new Recipe();
  recipeId!: number;
  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeId = Number(this.activatedRoute.snapshot.params['id']);
    this.assignServiceRecipe();
    console.log(this.recipe);
  }

  assignServiceRecipe = (): void => {
    this.recipesService
      .getRecipe(this.recipeId)
      .subscribe((resultRecipe: Recipe) => {
        this.recipe = resultRecipe;
      });
  };
}
