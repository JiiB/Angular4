import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
@Output() recipeSelected = new EventEmitter<Recipe>();  

recipe = new Recipe('Dummy', 'hallo', 'http://i.telegraph.co.uk/multimedia/archive/03491/Vladimir_Putin_1_3491835k.jpg') 
selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
