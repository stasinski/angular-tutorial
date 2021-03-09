import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | null;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {
    this.recipe = null;
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      const recipe = this.recipeService.getSingleRecipe(data['name']);
      if (recipe) {
        this.recipe = recipe;
      }
    });
  }

  onAddToList() {
    if (this.recipe)
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
