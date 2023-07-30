import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes = [
    {
      id: 1,
      name: 'Spaghetti',
      category: 'Danie główne',
      ingredients: [
        { ingredient: 'Jaja', quantity: '2' },
        { ingredient: 'Filet z kurczaka', quantity: '500g' },
        { ingredient: 'Pomidory w puszce', quantity: '500g' },
        { ingredient: 'Czosnek', quantity: '500g' },
        { ingredient: 'Cebula', quantity: '1' },
        { ingredient: 'Marchewka', quantity: '2' },
      ],
      steps: [
        {
          id: 1,
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
        {
          id: 2,
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
        {
          id: 3,
          step: 'Lorem ipsum dolor sit ing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
        {
          id: 4,
          step: 'Lorem ipsum dol. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
      ],
      difficulty: 3,
      photos: ['../assets/spaghetti.jpg'],
      timeToMake: '45 MIN',
    },
    {
      id: 2,
      name: 'Spaghetti',
      category: 'Danie główne',
      ingredients: [
        { ingredient: 'Jaja', quantity: '2' },
        { ingredient: 'Filet z kurczaka', quantity: '500g' },
        { ingredient: 'Pomidory w puszce', quantity: '500g' },
        { ingredient: 'Czosnek', quantity: '500g' },
        { ingredient: 'Cebula', quantity: '1' },
        { ingredient: 'Marchewka', quantity: '1' },
      ],
      steps: [
        {
          id: 1,
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
        {
          id: 2,
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
        {
          id: 3,
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
        {
          id: 4,
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
      ],
      difficulty: 2,
      photos: ['../assets/spaghetti.jpg'],
      timeToMake: '45 MIN',
    },
    {
      id: 3,
      name: 'Spaghetti',
      category: 'Danie główne',
      ingredients: [
        { ingredient: 'Jaja', quantity: '2' },
        { ingredient: 'Filet z kurczaka', quantity: '500g' },
        { ingredient: 'Pomidory w puszce', quantity: '500g' },
        { ingredient: 'Czosnek', quantity: '500g' },
        { ingredient: 'Cebula', quantity: '1' },
        { ingredient: 'Marchewka', quantity: '1' },
      ],
      steps: [
        {
          id: 1,
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
        {
          id: 2,
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
        {
          id: 3,
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
        {
          id: 4,
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
      ],
      difficulty: 1,
      photos: ['../assets/spaghetti.jpg'],
      timeToMake: '45 MIN',
    },
    {
      id: 4,
      name: 'Spaghetti',
      category: 'Danie główne',
      ingredients: [
        { ingredient: 'Jaja', quantity: '2' },
        { ingredient: 'Filet z kurczaka', quantity: '500g' },
        { ingredient: 'Pomidory w puszce', quantity: '500g' },
        { ingredient: 'Czosnek', quantity: '500g' },
        { ingredient: 'Cebula', quantity: '1' },
        { ingredient: 'Marchewka', quantity: '1' },
      ],
      steps: [
        {
          id: '1',
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
        {
          id: '2',
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
        {
          id: '3',
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
        {
          id: '4',
          step: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat quis iu',
        },
      ],
      difficulty: 3,
      photos: ['../assets/spaghetti.jpg'],
      timeToMake: '45 MIN',
    },
  ];
}
