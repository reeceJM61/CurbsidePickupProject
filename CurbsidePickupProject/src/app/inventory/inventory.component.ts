import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  items = []
  totalPrice = 0

  constructor(private iService:InventoryService) { } // TODO: private iService:InventoryService

  ngOnInit(): void {

  //   this.iService.getItems().subscribe((data:[])=>{
  //     this.items = data
  //     let total = 0
  //     this.items.forEach(i=> {
  //         total+=i.price
  //     })
  //     this.totalPrice = total
  // })

  }

}
