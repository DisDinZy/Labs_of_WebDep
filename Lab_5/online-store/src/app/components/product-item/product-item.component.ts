import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  currentImage: string = '';
  isModalOpen: boolean = false;

  ngOnInit() {
    this.currentImage = this.product.image; 
  }

  like() { this.product.likes++; }

  share(platform: string) {
    const url = encodeURIComponent(this.product.link);
    if(platform === 'whatsapp') window.open(`https://wa.me/?text=Смотри: ${url}`, '_blank');
    if(platform === 'telegram') window.open(`https://t.me/share/url?url=${url}&text=${this.product.name}`, '_blank');
  }

  openModal() { this.isModalOpen = true; }
  closeModal() { this.isModalOpen = false; }
  selectImage(img: string) { this.currentImage = img; }


  nextImage(event: Event) {
    event.stopPropagation(); 
    
    if (!this.product.images || this.product.images.length <= 1) return;
    
    let idx = this.product.images.indexOf(this.currentImage);
    if (idx === -1) idx = 0;
    
    if (idx < this.product.images.length - 1) {
      this.currentImage = this.product.images[idx + 1];
    } else {
      this.currentImage = this.product.images[0];
    }
  }

  prevImage(event: Event) {
    event.stopPropagation(); 
    
    if (!this.product.images || this.product.images.length <= 1) return;
    
    let idx = this.product.images.indexOf(this.currentImage);
    if (idx === -1) idx = 0;
    
    if (idx > 0) {
      this.currentImage = this.product.images[idx - 1];
    } else {
      this.currentImage = this.product.images[this.product.images.length - 1];
    }
  }
  
  delete(){
      this.remove.emit(this.product.id);
  }
}