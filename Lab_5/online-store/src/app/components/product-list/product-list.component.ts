import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styles: [`
    .grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
      gap: 25px; 
      padding-bottom: 50px;
    }
    .empty { 
      color: #888; 
      font-size: 18px; 
      text-align: center; 
      margin-top: 50px;
    }
  `]
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  onRemoveProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
