import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  
  currentImage: string = '';
  isModalOpen: boolean = false;

  ngOnInit() {
    if (this.product.images && this.product.images.length > 0) {
      this.currentImage = this.product.images[0];
    } else {
      this.currentImage = this.product.image;
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  selectImage(image: string) {
    this.currentImage = image;
  }

  // --- НОВАЯ ЛОГИКА ДЛЯ СТРЕЛОК ---
  nextImage() {
    const currentIndex = this.product.images.indexOf(this.currentImage);
    if (currentIndex < this.product.images.length - 1) {
      // Если не последняя - берем следующую
      this.currentImage = this.product.images[currentIndex + 1];
    } else {
      // Если последняя - идем в начало (зацикливаем)
      this.currentImage = this.product.images[0];
    }
  }

  prevImage() {
    const currentIndex = this.product.images.indexOf(this.currentImage);
    if (currentIndex > 0) {
      // Если не первая - берем предыдущую
      this.currentImage = this.product.images[currentIndex - 1];
    } else {
      // Если первая - идем в конец
      this.currentImage = this.product.images[this.product.images.length - 1];
    }
  }
  // --------------------------------

  share(platform: string) {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent('Check out this product: ' + this.product.name);
    let shareUrl = '';

    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${text}%20${url}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    }
    window.open(shareUrl, '_blank');
  }
}