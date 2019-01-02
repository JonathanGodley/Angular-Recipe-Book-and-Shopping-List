import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Hot Dog',
      'The american classic',
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/Hotdog_-_Evan_Swigart.jpg',
      [new Ingredient('Bun', 1), new Ingredient('Hot Dog', 1)]
    ),
    new Recipe(
      'Chicken Schnitzel',
      'Flattened breaded chicken breast',
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
      [new Ingredient('Chicken Breast', 1), new Ingredient('Fries', 25), new Ingredient('Bread crumbs', 1)]
    )
  ];

  getRecipes() {
    return this.recipes.slice(); // slice returns a copy, rather than a reference
  }
  constructor() { }
}
