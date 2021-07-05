import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Iproducts } from '../product/models/iproducts';
import { ProductService } from '../product/models/productservice.service';
import { CartserviceService } from './cartservice.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
items: Array<Iproducts> = []
totalPrice: number = 0
total: number = 0

 

  constructor(private pService: ProductService, private cService: CartserviceService) { }

  ngOnInit() {

    this.items = this.cService.getItems()

    this.items.forEach(i => {
      this.total += i.price
    })

    this.totalPrice = this.total

    // this.cService.getItems().subscribe((data:[]) => {
    //   this.items = data 
    //   let total = 0
    //   this.items.forEach(i => {
    //     total += i.price
    //   })
    //   this.totalPrice = total
    // }

    // this.cService.getItems().subscribe((data:[]) => {
    //   this.items = data 
    //   let total = 0
    //   this.items.forEach(i => {
    //     total += i.price
    //   })
    //   this.totalPrice = total
    // }

    

  }

  

  // $(document).ready(function () {
  //   updateAmounts();
  //   $('.qty, .price').on('keyup keypress blur change',
  //   function(e) {
  //     updateAmounts();
  //   });
    
  // });

  // function updateAmounts(): void {
  //   var sum: number = 0.0;
  //   $('#myTable > tbody > tr').each(function() {
  //     var qty: number = $(this).find('.qty').val();
  //     var price: number = $(this).find('.price').val();
  //     var amount: number = (qty * price)
  //     sum += amount;
  //     $(this).find('.amount').text('' + amount);
  //   });
  //   $('.total').text(sum);


// for quantity ++ or --

// var incementQty;
// var decrementQty;
// var plusBtn = $(".cart-qty-plus");
// var minusBtn = $("cart-qty-minus");
// var incrementQty = plusBtn.click(function() {
//   var $n = $(this)
//   .parent(".button-container")
//   .find(".qty");
//   $n.val(Number($n.val())+1);
//   updateAmounts();
// });

// var decrementQty = minusBtn.click(function() {
//   var $n = $(this)
//   .parent(".button-container")
//   .find(".qty");
//   var QtyVal = Number($n.val());
//   if(QtyVal > 0) {
//     $n.val(QtyVal - 1);
//   }
//   updateAmounts();
// });

// goBack(): void {
//   this.location.back();
// }
  


}
