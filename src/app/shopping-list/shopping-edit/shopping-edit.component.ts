import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private slServide: ShoppingListService) {}

  ngOnInit() {}

  onSubmit(name: string, amount: number) {
    this.slServide.addIngredient({ name, amount });
  }
}
