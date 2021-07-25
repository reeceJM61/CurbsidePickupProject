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
 

  
 

  constructor(private pService: ProductService, private cService: CartserviceService) {
    
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




}

