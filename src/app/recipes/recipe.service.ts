import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test recipe',
      'http://clipart-library.com/data_images/125152.png'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is also a test recipe',
      'http://clipart-library.com/data_images/125152.png'
    )
  ];

  getRecipes() {
    return this.recipes.slice(); // slice returns a copy, rather than a reference
  }
  constructor() { }
}