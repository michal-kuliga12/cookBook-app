import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes = [
    {
      id: '1',
      name: 'Spaghetti',
      category: 'Danie główne',
      difficulty: 3,
      photos: ['../assets/spaghetti.jpg'],
      timeToMake: '45 MIN',
    },
    {
      id: '2',
      name: 'Spaghetti',
      category: 'Danie główne',
      difficulty: 2,
      photos: ['../assets/spaghetti.jpg'],
      timeToMake: '45 MIN',
    },
    {
      id: '3',
      name: 'Spaghetti',
      category: 'Danie główne',
      difficulty: 1,
      photos: ['../assets/spaghetti.jpg'],
      timeToMake: '45 MIN',
    },
    {
      id: '4',
      name: 'Spaghetti',
      category: 'Danie główne',
      difficulty: 3,
      photos: ['../assets/spaghetti.jpg'],
      timeToMake: '45 MIN',
    },
  ];
}
