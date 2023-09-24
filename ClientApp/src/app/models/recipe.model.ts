export class Recipe {
  id: number = 0;
  name: string = '';
  category: string = '';
  ingredients: {
    ingredient: string;
    quantity: number;
  } = {
    ingredient: '',
    quantity: 0,
  };
  steps: {
    step: number;
    description: string;
  } = {
    step: 0,
    description: '',
  };
  difficulty: number = 0;
  photos: string[] = [''];
  timeToMake: string = '';
}
