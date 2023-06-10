import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  recipe: any;
  recipeId!: number;
  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.params['id'];
    this.recipe = this.getServiceRecipe();
    console.log(this.recipe);
  }
  getServiceRecipe() {
    return this.recipesService.recipes.find(
      (mappedRecipeId: any) => mappedRecipeId.id === this.recipeId
    );
  }
  applyStyleToChecked(id: any) {
    console.log(id);
  }
}
