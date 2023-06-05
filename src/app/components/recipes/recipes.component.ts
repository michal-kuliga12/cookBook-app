import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  // Zrobić typ
  recipes: any[] = [];

  constructor(private recipesService: RecipesService) {}
  ngOnInit(): void {
    this.recipes = this.recipesService.recipes;
    console.log(this.recipes);
  }
}
