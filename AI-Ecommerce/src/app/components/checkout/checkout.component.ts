import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  getCartItems() {
    return this.cartService.getCartItems();
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  placeOrder() {
    // Perform order placement logic here
    // Example: Send cart items to the server for order processing
    // Reset the cart after successful order placement
    this.cartService.clearCart();
  }
}
