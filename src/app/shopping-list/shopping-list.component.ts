import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private subscription!: Subscription;

  constructor(private slServide: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slServide.getIngredients();
    this.subscription = this.slServide.ingredientsChangeEmiter.subscribe(
      (data) => {
        this.ingredients = data;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
