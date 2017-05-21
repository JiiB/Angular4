import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../ingredient.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
@Output() recipeSelected = new EventEmitter<Recipe>();  

recipes: Recipe[] = [
  new Recipe(
    'Schnitzel',
   'lecker',
    'https://www.salomon-foodworld.com/files/salomon/images/Produkterlebnisse/Neuheiten/KnusperSchnitzel_Homestyle.png',
    [
      new Ingredient('Pommens', 10),
      new Ingredient('Schnitzel', 1)
    ] ),
  new Recipe(
    'Salat',
     'lecker',
      'http://starwayfood.ch/onewebmedia/Griechischer%20Salat.png',
      [
        new Ingredient('Blattsalat', 10),
        new Ingredient('Sauce', 10)
      ])
  ];
selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
