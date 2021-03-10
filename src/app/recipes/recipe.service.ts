import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      '1',
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('meat', 1), new Ingredient('french fries', 20)]
    ),
    new Recipe(
      '2',
      'A Long Hot-Dog',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('bread', 1), new Ingredient('tomatoes', 5)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getSingleRecipe(name: string) {
    return this.recipes.find((recipe) => recipe.name === name);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  updateRecipe(recipe: Recipe) {
    this.recipes = this.recipes.map((rec) => {
      if (rec.id === recipe.id) {
        return recipe;
      }
      return rec;
    });
    this.recipeChanged.next(this.recipes);
  }
}
