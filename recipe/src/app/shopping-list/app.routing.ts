import {Routes, RouterModule } from '@angular/router';
import {  RecipeComponent} from "app/recipe/recipe.component";
import {  ShoppingListComponent} from "app/shopping-list/shopping-list.component";
import { RECIPE_ROUTES } from "app/recipe/recipe-routes";

const APP_ROUTES: Routes = [
    {    path: '',    redirectTo: '/rezepte', pathMatch: 'full'  },
  {    path: 'rezepte',    component: RecipeComponent, children: RECIPE_ROUTES  },
  {    path: 'einkaufsliste',    component: ShoppingListComponent  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
