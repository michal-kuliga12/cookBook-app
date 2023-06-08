import { Component, OnInit } from '@angular/core';
import {
  faBowlFood,
  faBowlRice,
  faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  faPotFood = faPizzaSlice;
  recipes: any[] = [];

  constructor(private recipesService: RecipesService) {}
  ngOnInit(): void {
    this.recipes = this.recipesService.recipes;
    console.log(this.recipes);
  }
}
