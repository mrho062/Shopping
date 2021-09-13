import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  public addItemList: any =[];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }

  getAddedProduct() {
    return this.addItemList.asObservable();
  }

  setProduct(product : any){
    this.addItemList.push(...product);
    this.productList.next(product);
  }
  addtoAddedList(product : any){
    this.addItemList.push(product);
    this.productList.next(this.addItemList);
    //this.getTotalPrice();
    console.log(this.addItemList);
  }
}
