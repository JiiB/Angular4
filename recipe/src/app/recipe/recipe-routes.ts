import { Routes } from "@angular/router";
import { RecipeStartComponent } from "app/recipe/recipe-start.component";
import { RecipeEditComponent } from "app/recipe/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "app/recipe/recipe-detail/recipe-detail.component";

export const RECIPE_ROUTES: Routes = [
{ path: '', component: RecipeStartComponent},
{path: 'neu', component: RecipeEditComponent},
{path: ':id', component: RecipeDetailComponent},
{path: ':id/bearbeiten', component: RecipeEditComponent}
];