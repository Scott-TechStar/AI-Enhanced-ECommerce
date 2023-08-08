// home.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showLoginPrompt: boolean = false;
  featuredProducts: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getFeaturedProducts().subscribe((data) => {
      this.featuredProducts = data;
    });

    // Set up logic to show the login prompt after a certain interaction delay
    setTimeout(() => {
      this.showLoginPrompt = true;
    }, 10000); // Show after 10 seconds of interaction (adjust as needed)
  }
}
