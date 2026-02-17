import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 17 Pro',
      description: 'Next-generation Pro performance with an all-new A-series chip. Features an upgraded 48MP triple-camera system for spatial video. The stunning Always-On display is brighter and more responsive.',
      price: 761656,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy A55 5G',
      description: 'Features a premium metal and glass design with IP67 water and dust resistance. Equipped with a vibrant Super AMOLED display and a powerful 50MP main camera for clear shots in any light.',
      price: 186000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428962230302.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h14/hea/85428899479582.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf7/hd9/85428899610654.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd8/85428543782942.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/'
    },
    {
      id: 3,
      name: 'Apple iPhone 15',
      description: 'Equipped with the Dynamic Island and a 48MP main camera. Powered by the A16 Bionic chip for incredible efficiency. Features a durable color-infused glass back and contoured edge design.',
      price: 385447,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
    {
      id: 4,
      name: 'iPhone 16 Pro Max',
      description: 'The ultimate iPhone with a stunning lightweight titanium design. Features the A18 Pro chip for game-changing performance. Includes the largest Super Retina XDR display ever on an iPhone.',
      price: 980000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0c/87295489441822.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/'
    },
    {
       id: 5,
       name: 'Samsung Galaxy S24 Ultra',
       description: 'The ultimate Galaxy flagship featuring Galaxy AI and the built-in S Pen. Boasts a titanium frame and a massive 200MP camera system. The flat display offers an immersive viewing experience.',
       price: 540000,
       rating: 5.0,
       image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
       images: ['https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h16/h23/84963123527710.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h85/hb3/84963123593246.jpg?format=gallery-medium'],
       link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000'
    },
    {
      id: 6,
      name: 'Google Pixel 7',
      description: 'Powered by Google Tensor G2 for faster, more efficient performance. Features the best-in-class Pixel Camera with Real Tone and Magic Eraser. Enjoy a smooth, pure Android experience.',
      price: 229254,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h48/h8e/86037204303902.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h48/h8e/86037204303902.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h8f/hae/86037204336670.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h59/86037204369438.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf2/hc2/86037204402206.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-chernyi-106971937/?c=750000000'
    },
    {
      id: 7,
      name: 'OnePlus 13R',
      description: 'Delivers flagship performance with the Snapdragon 8 Gen 3 processor. Features a legendary Hasselblad camera system for professional portraits. Supports ultra-fast charging to keep you going.',
      price: 313902,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p62/p82/24035969.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p62/p82/24035969.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf6/p7f/24035970.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pda/p7f/24035971.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pa1/p7f/24035973.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/oneplus-13r-12-gb-256-gb-chernyi-132466811/?c=750000000'
    },
    {
      id: 8,
      name: 'Poco X7 Pro',
      description: 'A gaming powerhouse featuring the MediaTek Dimensity 8300 Ultra chipset. Boasts a high-refresh-rate AMOLED display for smooth gameplay. Includes a massive battery with turbo charging support.',
      price: 145000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfe/p6c/67021880.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pfe/p6c/67021880.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7b/pec/19979679.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p0f/pea/19979680.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pba/pe9/19979683.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/poco-x7-pro-12-gb-512-gb-zelenyi-133397517/?c=750000000'
    },
    {
      id: 9,
      name: 'Samsung Galaxy S23 FE 8',
      description: 'The Fan Edition that brings flagship features at a great value. Features a pro-grade camera with Nightography. The dynamic AMOLED 2X display delivers vivid colors and smooth scrolling.',
      price: 210000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h64/hf1/84251427635230.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h64/hf1/84251427635230.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h8a/h92/84251427700766.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hd7/h32/84251427897374.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he3/h7c/84251427766302.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-fe-8-gb-128-gb-fioletovyi-113976957/?c=750000000'
    },
    {
      
      id: 10,
      name: 'iPhone 13 128GB Midnight',
      description: 'Apple flagship with a bright Super Retina XDR display. Powered by the A15 Bionic chip for lightning-fast performance. Features an advanced dual-camera system for stunning photos and videos.',
      price: 295000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-polnoch-102298404/'
    
    }
  ];
}