import { Component, AfterViewInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
  }
  searchQuery: string = ''; // Initialize with an empty string
  constructor(private productService: ProductService) {}


  searchProducts() {
    if (this.searchQuery.trim() !== '') {
      // Call the ProductService's search method and update the filtered products
      this.productService.searchProducts(this.searchQuery).subscribe(filteredProducts => {
        this.productService.updateFilteredProducts(filteredProducts);
      });
    } else {
      // If the search query is empty, reset the filtered products to show all products
      this.productService.resetFilteredProducts();
    }
  }

}
