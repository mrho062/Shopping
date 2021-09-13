import { Component, OnInit } from '@angular/core';
import { Item } from '../item'
import { AddService } from '../service/add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent{// implements OnInit {

items: Item[] = [];

formComponentShouldBeDisplayed: boolean = true;

onAddItem(event: Item) {
  this.items.push(event);
  console.log(this.items);
}
}

//   itemName: string = "";
//   itemDesc: string = "";
//   itemPrice: string = "";
//   imageLink: string = "";

//   items: Item[] = [];
//   // htmlelement: HTMLElement;
//   // Create_Element(htmlelement) {
//   //   var element = document.createElement("input");
//   //   element.setAttribute("type", htmlelement);
//   // }


//   constructor(private addService : AddService) {}

//   ngOnInit(): void {
//   }

//   onFirstNameInput(event: Event) {
//     this.itemName = (event.target as HTMLInputElement).value;
//   }

//   onLastNameInput(event: Event) {
//     this.itemDesc = (event.target as HTMLInputElement).value;
//   }

//   onItemPriceInput(event: Event) {
//     this.itemPrice = (event.target as HTMLInputElement).value;
//   }

//   onImageLinkInput(event: Event) {
//     this.imageLink = (event.target as HTMLInputElement).value;
//   }

//   onAddItem(event: Item) {
//     this.items.push(event);
//     console.log(this.items);
//   }

//   addtocat(item: any){
//     this.addService.addtoAddedList(item);
//   }
// }
