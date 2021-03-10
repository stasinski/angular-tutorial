import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private slServide: ShoppingListService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form);
    this.slServide.addIngredient({
      name: form.value.name,
      amount: form.value.amount,
    });
  }
}
