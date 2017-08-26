import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../recipe.model';

import { RecipeService } from '../recipe.service';

import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  recipeId: number;
  private subscription: Subscription;
  constructor(
    private recipeService: RecipeService,
    private sls: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      params => {
        this.recipeId = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  

  onAddToList() {
    this.sls.addIngredients(this.selectedRecipe.ingredients)
  }

  onEdit() {
    this.router.navigate(['/rezepte', this.recipeId, 'bearbeiten']);
  }

  onDelete() {
    this.router.navigate(['/rezepte']);
    this.recipeService.deleteRecipe(this.recipeId);
  }

}
