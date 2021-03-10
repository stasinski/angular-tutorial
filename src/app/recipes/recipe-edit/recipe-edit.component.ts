import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  selectedRecipe: Recipe;

  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const name = params['name'];
      const recipe = this.recipeService.getSingleRecipe(name);
      if (recipe) {
        this.selectedRecipe = recipe;
      } else {
        this.router.navigate(['/']);
      }
    });

    const ingredienstArray = this.selectedRecipe.ingredients.map(
      (ingredient) => {
        return new FormGroup({
          name: new FormControl(ingredient.name, Validators.required),
          amount: new FormControl(ingredient.amount, Validators.required),
        });
      }
    );

    this.recipeForm = new FormGroup({
      name: new FormControl(this.selectedRecipe.name, Validators.required),
      description: new FormControl(
        this.selectedRecipe.description,
        Validators.required
      ),
      imagePath: new FormControl(
        this.selectedRecipe.imagePath,
        Validators.required
      ),
      ingredients: new FormArray(ingredienstArray),
    });
  }

  getIngredientsControl() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  addController() {
    const controller = new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl(1, Validators.required),
    });

    (<FormArray>this.recipeForm.get('ingredients')).push(controller);
  }

  onSubmit() {
    const mapIngredients = (<Ingredient[]>(
      this.recipeForm.value.ingredients
    )).map((ing) => new Ingredient(ing.name, ing.amount));

    const newRecipe = new Recipe(
      this.selectedRecipe.id,
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      mapIngredients
    );

    this.recipeService.updateRecipe(newRecipe);
  }
}
