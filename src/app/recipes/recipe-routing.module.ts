import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      { path: '', pathMatch: 'full', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':name', component: RecipeDetailComponent },
      { path: ':name/edit', component: RecipeEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
