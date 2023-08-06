import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
})
export class FetchDataComponent {
  public recipes: Recipe[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Recipe[]>(baseUrl + 'recipes').subscribe(
      (result) => {
        console.log(result);
        this.recipes = result;
      },
      (error) => console.error(error)
    );
  }
}

interface Recipe {
  id: number;
  name: string;
  category: string;
  timeToMake: number;
}
