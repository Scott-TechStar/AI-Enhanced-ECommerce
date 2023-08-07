import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Replace this with an actual API endpoint to fetch product data from the backend
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 49.99,
      description: 'This is Product 1',
      imageUrl: 'path/to/image1.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      description: 'This is Product 2',
      imageUrl: 'path/to/image2.jpg'
    },
    // Add more products here
  ];

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    // Simulate API call with an Observable
    return of(this.products);
  }

  getProductById(productId: number): Observable<Product | undefined> {
    // Simulate API call to fetch a product by ID
    const product = this.products.find(p => p.id === productId);
    return of(product);
  }
}
