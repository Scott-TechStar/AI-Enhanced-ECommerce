import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0; // Provide an initializer here (you can use 0 as a default value)

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id']; // Assuming your route parameter is named 'id'
      this.loadProductDetails();
    });
  }

  loadProductDetails(): void {
    if (this.productId > 0) {
      this.productService.getProductById(this.productId).subscribe(
        (product: Product | undefined) => this.product = product
      );
    } else {
      // Handle the case when productId is not valid (e.g., show an error message or redirect)
    }
  }
}