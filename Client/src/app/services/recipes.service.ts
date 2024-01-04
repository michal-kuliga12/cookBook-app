import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private url = 'Recipes';
  recipes?: Recipe[];
  constructor(private http: HttpClient) {}

  // GetRecipes observable

  // getRecipe observable
}
