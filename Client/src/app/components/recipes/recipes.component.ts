import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  faBowlFood,
  faBowlRice,
  faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  faPotFood = faPizzaSlice;
  recipes: Recipe[] | any = [];

  constructor(
    private recipesService: RecipesService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe({
      next: (result: Object) => {
        this.recipes = result;
        console.log(this.recipes);
      },
      error: (err) => console.log(err),
      complete: () => console.log('Transfer has completed'),
    });
  }
}
