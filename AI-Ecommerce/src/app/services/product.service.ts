import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Replace this with an actual API endpoint to fetch product data from the backend
  public filteredProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 49.99,
      description: 'Test Product 1',
      imageUrl: 'path/to/image1.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      description: 'Test Product 2',
      imageUrl: 'path/to/image2.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 99.99,
      description: 'Test Product 3',
      imageUrl: 'path/to/image1.jpg'
    },
    {
      id: 4,
      name: 'Product 4',
      price: 79.99,
      description: 'Test Product 4',
      imageUrl: 'path/to/image2.jpg'
    },
    {
      id: 5,
      name: 'Product 5',
      price: 69.99,
      description: 'Test Product 5',
      imageUrl: 'path/to/image1.jpg'
    },
    {
      id: 6,
      name: 'Product 6',
      price: 59.99,
      description: 'Test Product 6',
      imageUrl: 'path/to/image2.jpg'
    },
    {
      id: 7,
      name: 'Product 7',
      price: 39.99,
      description: 'Test Product 7',
      imageUrl: 'path/to/image1.jpg'
    },
    {
      id: 8,
      name: 'Product 8',
      price: 19.99,
      description: 'Test Product 8',
      imageUrl: 'path/to/image2.jpg'
    },
    // Add more products here
  ];

  constructor() {}
  getAllProducts(): Observable<Product[]> {
    return new Observable((observer) => {
      observer.next(this.products);
      observer.complete();
    });
  }


  getProductById(productId: number): Observable<Product | undefined> {
    // Simulate API call to fetch a product by ID
    const product = this.products.find(p => p.id === productId);
    return of(product);
  }
  getFeaturedProducts(): Observable<Product[]> {
    // Return the first three products as featured products
    const featuredProducts = this.products.slice(0, 3);
    return of(featuredProducts);
  }
  

//Search button functions

  searchProducts(query: string): Observable<Product[]> {
    // Implement your logic to search and filter products based on the query
    const filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    return of(filteredProducts);
  }

  updateFilteredProducts(filteredProducts: Product[]) {
    this.filteredProducts.next(filteredProducts);
  }

  resetFilteredProducts() {
    this.filteredProducts.next(this.products);
  }
}
