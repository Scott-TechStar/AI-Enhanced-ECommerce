import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = []; // For filtered search results
  searchQuery: string = '';

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.loadProducts();
    // Initialize filtered products with all products
    this.filteredProducts = this.products;
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  filterProducts(): void {
    if (this.searchQuery) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      // Show all products if search query is empty
      this.filteredProducts = this.products;
    }
  }
}
