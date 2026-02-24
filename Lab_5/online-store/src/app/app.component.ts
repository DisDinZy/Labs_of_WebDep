import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CATEGORIES, PRODUCTS } from './data/kaspi.data';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, ProductListComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  categories = CATEGORIES;
  allProducts = PRODUCTS;
  
  selectedCategory: Category | null = null;
  displayedProducts: Product[] = [];

  selectCategory(cat: Category) {
    this.selectedCategory = cat;
    this.displayedProducts = this.allProducts.filter(p => p.categoryId === cat.id);
  }
}