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
  public getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/recipes`);
  }

  // getRecipe observable
  public getRecipe(recipeId: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${environment.apiUrl}/recipes/${recipeId}`);
  }
}
