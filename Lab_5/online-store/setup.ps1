Write-Host "Создаем структуру папок для Lab 5..." -ForegroundColor Cyan

# 1. Создаем папки
$base = "src/app"
New-Item -ItemType Directory -Force -Path "$base/models" | Out-Null
New-Item -ItemType Directory -Force -Path "$base/data" | Out-Null
New-Item -ItemType Directory -Force -Path "$base/components/product-item" | Out-Null
New-Item -ItemType Directory -Force -Path "$base/components/product-list" | Out-Null

Write-Host "Генерируем файлы и код..." -ForegroundColor Cyan

# 2. Модели
Set-Content -Path "$base/models/category.model.ts" -Value @'
export interface Category {
  id: number;
  name: string;
}
'@

Set-Content -Path "$base/models/product.model.ts" -Value @'
export interface Product {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  link: string;
  likes: number;
}
'@

# 3. База данных (Генерируем 4 категории и 20 товаров)
Set-Content -Path "$base/data/kaspi.data.ts" -Value @'
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Смартфоны' },
  { id: 2, name: 'Ноутбуки' },
  { id: 3, name: 'Наушники' },
  { id: 4, name: 'Планшеты' }
];

export const PRODUCTS: Product[] = [];

// Автоматически генерируем по 5 товаров для каждой из 4 категорий (Итого 20 товаров)
CATEGORIES.forEach(cat => {
  for (let i = 1; i <= 5; i++) {
    PRODUCTS.push({
      id: cat.id * 10 + i,
      categoryId: cat.id,
      name: `${cat.name} Model ${i} Pro`,
      description: `Отличный товар из категории ${cat.name}. Доставка Kaspi.`,
      price: 50000 * i,
      rating: +(4.0 + (i * 0.1)).toFixed(1),
      image: 'https://resources.kaspi.kz/img/m/p/h32/h70/84378448195614.jpg', // Заглушка, поменяешь на реальные
      link: 'https://kaspi.kz/',
      likes: 0
    });
  }
});
'@

# 4. Product Item (Child Component)
Set-Content -Path "$base/components/product-item/product-item.component.ts" -Value @'
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styles: [`
    .card { border: 1px solid #ddd; padding: 15px; border-radius: 8px; text-align: center; }
    .card img { max-width: 100px; }
    .btn-like { background-color: #ffeef0; color: red; border: 1px solid red; padding: 5px 10px; cursor: pointer; border-radius: 5px;}
    .btn-del { background-color: #f8f9fa; color: #333; border: 1px solid #ccc; padding: 5px 10px; cursor: pointer; border-radius: 5px;}
    .btn-share { background-color: #25D366; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 5px;}
    .actions { display: flex; justify-content: space-around; margin-top: 15px; }
  `]
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  like() { this.product.likes++; }
  delete() { this.remove.emit(this.product.id); }
  share() { window.open(`https://wa.me/?text=Смотри: ${encodeURIComponent(this.product.link)}`, '_blank'); }
}
'@

Set-Content -Path "$base/components/product-item/product-item.component.html" -Value @'
<div class="card">
  <img [src]="product.image" alt="Product Image">
  <h3>{{ product.name }}</h3>
  <p>{{ product.description }}</p>
  <p><strong>{{ product.price }} ₸</strong> | Рейтинг: {{ product.rating }}</p>
  
  <div class="actions">
    <button class="btn-like" (click)="like()">❤️ {{ product.likes }}</button>
    <button class="btn-share" (click)="share()">WhatsApp</button>
    <button class="btn-del" (click)="delete()">🗑️ Удалить</button>
  </div>
</div>
'@

# 5. Product List (Parent Component)
Set-Content -Path "$base/components/product-list/product-list.component.ts" -Value @'
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styles: [`
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
    .empty { color: red; font-size: 18px; text-align: center; margin-top: 50px;}
  `]
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  onRemoveProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
'@

Set-Content -Path "$base/components/product-list/product-list.component.html" -Value @'
@if (products.length === 0) {
  <p class="empty">Товаров в этой категории нет (или они были удалены).</p>
} @else {
  <div class="grid">
    @for (p of products; track p.id) {
      <app-product-item [product]="p" (remove)="onRemoveProduct($event)"></app-product-item>
    }
  </div>
}
'@

# 6. App Component (Root)
Set-Content -Path "$base/app.component.ts" -Value @'
import { Component } from '@angular/core';
import { CATEGORIES, PRODUCTS } from './data/kaspi.data';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styles: [`
    .layout { display: flex; gap: 30px; padding: 20px; font-family: sans-serif; }
    .sidebar { width: 200px; display: flex; flex-direction: column; gap: 10px; }
    .sidebar button { padding: 10px; cursor: pointer; border: 1px solid #ddd; background: white; border-radius: 5px; }
    .sidebar button.active { background: #f14635; color: white; border-color: #f14635; }
    .content { flex-grow: 1; }
  `]
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
'@

Set-Content -Path "$base/app.component.html" -Value @'
<div class="layout">
  <div class="sidebar">
    <h2>Каталог</h2>
    @for (cat of categories; track cat.id) {
      <button 
        [class.active]="selectedCategory?.id === cat.id"
        (click)="selectCategory(cat)">
        {{ cat.name }}
      </button>
    }
  </div>

  <div class="content">
    @if (!selectedCategory) {
      <h2>Выберите категорию слева 👈</h2>
    } @else {
      <h2>Категория: {{ selectedCategory.name }}</h2>
      <app-product-list [products]="displayedProducts"></app-product-list>
    }
  </div>
</div>
'@

Write-Host "Готово! Все файлы для Lab 5 успешно созданы." -ForegroundColor Green
Write-Host "Запускай 'ng serve' и открывай http://localhost:4200/" -ForegroundColor Yellow