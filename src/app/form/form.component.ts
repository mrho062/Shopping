import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output('addItem')
  addItems: EventEmitter<Item> = new EventEmitter();

  itemNameInputValue: string = "";
  itemDescInputValue: string = "";
  itemPriceInputValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    let item: Item = {
      'itemName': this.itemNameInputValue,
      'itemDesc': this.itemDescInputValue,
      'itemPrice': this.itemPriceInputValue
    }
  
    this.addItems.emit(item);
  }

}
