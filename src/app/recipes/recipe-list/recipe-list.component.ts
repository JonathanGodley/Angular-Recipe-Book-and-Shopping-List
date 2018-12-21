import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
// TODO: use local image hosting rather than URLs
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test recipe used for testing the + application\'s basic functionality',
      'http://clipart-library.com/data_images/125152.png'
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
