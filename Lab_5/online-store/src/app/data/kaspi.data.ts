import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' }, 
  { id: 2, name: 'Laptops' },     
  { id: 3, name: 'Headphones' },  
  { id: 4, name: 'Tablets' }
];


export const PRODUCTS: Product[] = [

  { id: 1, categoryId: 1, name: 'Apple iPhone 17 Pro', description: 'Титановый корпус, чип A17 Pro.', price: 824844, rating: 5.0, likes: 1011, link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
            ]
  },
  { id: 2, categoryId: 1, name: 'Samsung Galaxy S24 Ultra', description: 'ИИ-функции, стилус S Pen в комплекте.', price: 654000, rating: 4.8, likes: 16, link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hdb/h7e/84963123494942.png?format=gallery-medium'
    ] },
  { id: 3, categoryId: 1, name: 'Xiaomi 14', description: 'Оптика Leica, супер быстрая зарядка.', price: 159498, rating: 4.5, likes: 133, link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p65/p99/45808873.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p81/p99/45808874.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p81/p99/45808874.jpg?format=gallery-medium'
    ] },
  { id: 4, categoryId: 1, name: 'Apple iPhone 13', description: 'Классика, которая всё еще актуальна.', price: 344960, rating: 4.9, likes: 2677, link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb4/h03/64206207352862.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb8/h32/64206209384478.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he8/h1c/64206212857886.jpg?format=gallery-medium'
    ] },
  { id: 5, categoryId: 1, name: 'Poco X6 Pro', description: 'Игровой смартфон с отличным экраном.', price: 219990, rating: 4.0, likes: 153, link: 'https://kaspi.kz/shop/p/poco-x7-pro-8-gb-256-gb-zheltyi-133354947/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pb0/p69/67021871.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pb0/p69/67021871.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pa6/pae/19823864.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p6d/pae/19823866.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p91/pab/19823871.png?format=gallery-medium'
    ] },






  { id: 6, categoryId: 2, name: 'Apple MacBook Air 13 M1', description: 'Лучший ноутбук для работы.', price: 439890, rating: 5.0, likes: 589, link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium'
    ] },
  { id: 7, categoryId: 2, name: 'Lenovo IdeaPad 3', description: 'Надежный ноутбук для учебы.', price: 170430, rating: 3.9, likes: 12, link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he0/he8/64231929446430.jpg?format=gallery-medium'
    ] },
  { id: 8, categoryId: 2, name: 'ASUS TUF Gaming A15', description: 'Мощная видеокарта RTX 3050.', price: 488960, rating: 4.8, likes: 43, link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-15-6-16-gb-ssd-512-gb-bez-os-90nr0jf7-m00jd0-147782981/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p0a/pc7/79449284.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p0a/pc7/79449284.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p03/pca/79449290.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p71/p6d/71824948.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3b/pca/79449292.png?format=gallery-medium'
    ] },
  { id: 9, categoryId: 2, name: 'Acer Nitro 5', description: 'Отличный выбор для геймеров.', price: 547990, rating: 4.2, likes: 21, link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-58-15-6-16-gb-ssd-512-gb-bez-os-nh-qfher-006-135871819/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p98/p1b/54653526.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p98/p1b/54653526.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p98/p1b/54653526.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p75/p1e/54653531.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ped/p1b/54653529.png?format=gallery-medium'
    ] },
  { id: 10, categoryId: 2, name: 'MacBook Pro 16 M3 Max', description: 'Монстр для профессионалов.', price: 1999400, rating: 5.0, likes: 10, link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-16-2-36-gb-ssd-1024-gb-macos-mrw33-115207483/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p59/29101751.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p68/p59/29101751.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p68/p59/29101751.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha4/h4d/84674967207966.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf3/hd2/84674967273502.jpg?format=gallery-medium'
    ] },

  




  { id: 11, categoryId: 3, name: 'Apple AirPods Pro 2', description: 'Активное шумоподавление.', price: 2250, rating: 4.9, likes: 2282, link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he4/h13/85730021834782.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h61/ha2/85730021900318.jpg?format=gallery-medium'
    ] },
  { id: 12, categoryId: 3, name: 'Marshall Major IV', description: '80 часов без подзарядки.', price: 18434, rating: 4.8, likes: 2643, link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p0f/pc2/17680137.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p2b/pc2/17680138.jpg?format=gallery-large'
    ] },
  { id: 13, categoryId: 3, name: 'Sony WH-1000XM5', description: 'Лучший звук и дизайн.', price: 139990, rating: 5.0, likes: 356, link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h0d/h4e/65099689000990.jpg?format=gallery-medium'
    ] },
  { id: 14, categoryId: 3, name: 'Samsung Galaxy Buds 2 Pro', description: 'Идеально для Android.', price: 19875, rating: 4.7, likes: 266, link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-core-belyi-142551267/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pd6/p6b/53123472.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pd6/p6b/53123472.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p81/p6b/53123475.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p49/p6b/53123477.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p2d/p6b/53123478.png?format=gallery-medium'
    ] },
  { id: 15, categoryId: 3, name: 'JBL Tune 520BT', description: 'Бюджетные и басовитые.', price: 25000, rating: 4.6, likes: 5, link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-520bt-chernyi-110103473/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h87/80522158211102.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h3e/h87/80522158211102.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h40/hac/86333130899486.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc2/hdf/81348676812830.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h41/h43/86333130932254.jpg?format=gallery-medium'
    ] },

  





  { id: 16, categoryId: 4, name: 'Apple iPad A16 11', description: 'Яркий экран, новый дизайн.', price: 204000, rating: 4.9, likes: 207, link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-rozovyi-138199640/?c=750000000  ',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pad/p8c/37011948.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p91/p8c/37011949.png?format=gallery-medium'
    ] },
  { id: 17, categoryId: 4, name: 'Samsung Galaxy Tab S9', description: 'AMOLED экран, защита от воды.', price: 307890, rating: 4.8, likes: 9, link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb3/h78/82770436423710.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hde/h76/82770436784158.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h53/h0f/82770863226910.jpg?format=gallery-large'
    ] },
  { id: 18, categoryId: 4, name: 'Xiaomi Pad 6', description: 'Топ за свои деньги.', price: 129990, rating: 4.0, likes: 67, link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-pro-12-1-djuim-6-gb-128-gb-seryi-148868363/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p21/p0b/75463810.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p21/p0b/75463810.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pb0/p0a/75463814.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p9b/p07/75463821.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pcd/p0a/75463813.jpg?format=gallery-medium'
    ] },
  { id: 19, categoryId: 4, name: 'Lenovo Tab P11', description: 'Для просмотра фильмов.', price: 110000, rating: 4.6, likes: 90, link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-plus-tb-j616f-za940326ru-11-djuim-4-gb-128-gb-seryi-109848413/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/hdb/79994503921694.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hb7/hdb/79994503921694.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc4/h5b/79994504183838.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hed/h72/79994504445982.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hda/h33/79994502086686.jpg?format=gallery-medium'
    ] },
  { id: 20, categoryId: 4, name: 'Apple iPad Air 5', description: 'Мощный чип M1 в тонком корпусе.', price: 323000, rating: 5.0, likes: 76, link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-fioletovyi-138202498/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pae/pf8/37020299.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pae/pf8/37020299.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p39/pbd/37020300.png?format=gallery-medium'
    ] }
];