import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../recipe/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[] = [];

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.sls.getIngredients();
  }

}
