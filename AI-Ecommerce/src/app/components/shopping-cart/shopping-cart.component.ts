import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }
}
