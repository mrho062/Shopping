import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { AddService } from 'src/app/service/add.service';
//import { FormControl, FormGroup } from '@angular/forms';
//import { Item } from '../item'
//import { BsModalRef } from 'ngx-bootstrap/modal'
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductsComponent implements OnInit {

  //insertForm: FormGroup;
  //name: FormControl;
  //price: FormControl;
  //description: FormControl;

  // Add Modal
  //@ViewChild('template') modal : TemplateRef<any>;

  // Update Modal
  //@ViewChild('editTemplate') editmodal : TemplateRef<any>;

  //Modal properties
  //modalMessage : string;
  //modalRef : BsModalRef;
  //selectedProduct : Item;
  //products$ : Observable<Item[]>;
  //products : Item[] = [];





  public productList : any ;
  public addedList : any;
  public filterCategory : any;
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService, private addService : AddService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      //this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

 // ngOnChanges(): void {
  //  this.addService.getAddedProduct()
  //  .subscribe(res=>{
  //    this.addedList = res;
      //this.filterCategory = res;
  //    this.productList.forEach((a:any) => {
  //      Object.assign(a, {quantity:1, total:a.itemPrice});
  //    })
  //  })
  //}

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}