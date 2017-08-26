// import {EventEmitter} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from './ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
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

// recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
      return this.recipes;
  }
  getRecipe(id: number){
    return this.recipes[id];
  }
  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
  }
}