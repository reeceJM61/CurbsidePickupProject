import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../inventory/inventory.service';
import { ProductInfoService } from './product-info.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //index!: number; //indefinate assertion
  products: any;

  constructor(private vService:ProductInfoService,private iService:InventoryService) { } // TODO: private vService:VehiclesService,private iService:InventoryService
  /*private route: ActivatedRoute,*/

  // Caution
  ngOnInit(): void {
    //this.route.params.subscribe(params => this.index = params['id'])
    this.products = this.vService.getVehicles()
  }

filterItems(e:any){ //quick fix for 'e'
  //this.route.params.subscribe(params => this.index = params['id'])
   // console.log(e.target.value)
   this.products = this.vService.filter(e.target.value)
}

setFavorite(p: { brand: string; }){ // quick fix for 'p'
    this.vService.updateFavorite(p.brand)
}

addToInventory(p: any){ // quick fix for 'p'
    this.iService.add(p)
}

// updateFavorite() {
  
// }

}
