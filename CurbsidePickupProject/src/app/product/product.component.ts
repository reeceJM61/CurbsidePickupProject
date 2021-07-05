import { Component, Input, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { ProductService} from './models/productservice.service';
import { Products } from './models/products'
import { CartserviceService } from '../shopping-cart/cartservice.service';
import { Iproducts } from './models/iproducts';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
  
  inventory: Array<Iproducts> = []
 

  //   new Products(1, "Phone", 1000, false, "Electronics"),
  //   new Products(2, "Laptop", 2000, false, "Electronics"),
  //   new Products(3, "PlayStation", 1000, false, "Electronics"),
  //   new Products(4, "Milk", 2, false, "Food"),
  //   new Products(5, "Cereal", 4, false, "Food"),
  //   new Products(6, "Eggs", 2, false, "Food"),
  //   new Products(7, "Shirt", 20, false, "Clothing"),
  //   new Products(8, "Shoes", 30, false, "Clothing"),
  //   new Products(9, "Dog Food", 20, false, "Pets"),
  //   new Products(10, "Cat Food", 20, false, "Pets")

  // ]
 

  constructor(private pService: ProductService, private cService: CartserviceService) {
    //this.inventory = pService.getInventory()
  } 

  ngOnInit() {
    this.inventory = this.pService.getInventory()
  }

  // setFavorite(p) {
  //   return this.pService.setFavorite(p.favorite)
  // }

  filterItems(e: any) {
    this.inventory = this.pService.filter(e.target.value)
  }

  addToCart(p:any){ // adds item to cart based on array index
    this.cService.add(p)
  }



  //title:string = 'Products'

  // function doSomething() {
  //   for (let i = 0; i < 5; i++) {
  //     console.log(i)
  //   }
  //   console.log('Finally: ' + i)
  // }

  // doSomething()



}

