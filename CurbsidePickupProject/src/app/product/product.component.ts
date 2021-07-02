import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../inventory/inventory.service';
import { ProductInfoService } from './product-info.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  index: number | undefined;
  products: any;

  constructor(private vService:ProductInfoService,private iService:InventoryService) { } // TODO: private vService:VehiclesService,private iService:InventoryService

  // Caution
  ngOnInit(): void {
    //this.route.params.subscribe(params => this.index = params['id'])
    this.products = this.vService.getVehicles()
  }

filterItems(e: { target: { value: string; }; }){ //quick fix for 'e'
   // console.log(e.target.value)
   this.products = this.vService.filter(e.target.value)
}

setFavorite(p: { brand: string; }){ // quick fix for 'p'
    this.vService.updateFavorite(p.brand)
}

addToInventory(p: any){ // quick fix for 'p'
    this.iService.add(p)
}

}
