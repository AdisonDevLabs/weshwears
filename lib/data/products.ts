// lib/data/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFlashDeal?: boolean;
  description: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Birkenstock Suede Clog",
    price: 3500,
    image: "/1.png",
    images: ["/1.png"],
    category: "Casual",
    rating: 4.8,
    reviews: 142,
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["Grey"],
    isNewArrival: true,
    description: "Premium suede clog featuring a secure buckle strap and cork-style footbed for all-day comfort and effortless style."
  },
  {
    id: "p2",
    name: "Nike Air Max Pink",
    price: 4500,
    originalPrice: 5000,
    image: "/2.png",
    images: ["/2.png"],
    category: "Sneakers",
    rating: 4.7,
    reviews: 98,
    sizes: ["39", "40", "41", "42"],
    colors: ["Pink"],
    isFlashDeal: true,
    description: "Lightweight Nike Air Max in a soft pastel pink colorway, offering responsive cushioning and a clean, breathable aesthetic."
  },
  {
    id: "p3",
    name: "Nike Dunk Low Tan",
    price: 4200,
    image: "/3.png",
    images: ["/3.png"],
    category: "Sneakers",
    rating: 4.9,
    reviews: 210,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Tan", "Brown"],
    isBestSeller: true,
    description: "Classic Dunk Low silhouette in versatile earthy tones of tan and brown, perfect for everyday streetwear."
  },
  {
    id: "p4",
    name: "New Balance 2002R Pink/White",
    price: 4800,
    image: "/4.png",
    images: ["/4.png"],
    category: "Sneakers",
    rating: 4.9,
    reviews: 156,
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["Pink", "White"],
    isNewArrival: true,
    description: "Stylish and comfortable New Balance 2002R in a striking white and pink combination, ideal for modern urban living."
  },
  {
    id: "p5",
    name: "Puma Ballet Flats",
    price: 3200,
    image: "/5.png",
    images: ["/5.png"],
    category: "Casual",
    rating: 4.6,
    reviews: 75,
    sizes: ["38", "39", "40", "41"],
    colors: ["Black", "Pink"],
    description: "Feminine Puma ballet-inspired flats featuring multi-strap detailing and a comfortable, lightweight fit."
  },
  {
    id: "p6",
    name: "Nike P.6000 Grey/Black",
    price: 4500,
    image: "/6.png",
    images: ["/6.png"],
    category: "Sneakers",
    rating: 4.8,
    reviews: 130,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Grey", "Black"],
    isBestSeller: true,
    description: "Retro-inspired Nike P.6000 with a tech-mesh base and bold black structural overlays for a unique layered look."
  },
  {
    id: "p7",
    name: "LV Trainer Red/White",
    price: 5500,
    image: "/7.png",
    images: ["/7.png"],
    category: "Sneakers",
    rating: 4.9,
    reviews: 88,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Red", "White"],
    isFlashDeal: true,
    description: "High-fashion sneaker inspired design with premium red and white leather panels and subtle branded details."
  },
  {
    id: "p8",
    name: "Reebok Club C Green/White",
    price: 3800,
    image: "/8.png",
    images: ["/8.png"],
    category: "Sneakers",
    rating: 4.7,
    reviews: 115,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["White", "Green"],
    isNewArrival: true,
    description: "The timeless Reebok Club C aesthetic, featuring crisp white leather accented by deep green branding for a retro court feel."
  },
  {
    id: "p9",
    name: "Reebok Club C Black/Suede",
    price: 3800,
    image: "/9.png",
    images: ["/9.png"],
    category: "Sneakers",
    rating: 4.7,
    reviews: 102,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Black", "Grey"],
    description: "Classic Reebok style in a sophisticated black suede finish, offering a durable and sleek option for any wardrobe."
  },
  {
    id: "p10",
    name: "Nike Shox x Supreme Olive",
    price: 4800,
    image: "/10.png",
    images: ["/10.png"],
    category: "Sneakers",
    rating: 4.9,
    reviews: 180,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Olive", "Brown", "Lime"],
    isBestSeller: true,
    description: "A bold collaboration piece. This Shox sneaker features an olive green earth-tone palette with vibrant lime swoosh accents."
  }
];

export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getNewArrivals = () => products.filter((p) => p.isNewArrival);
export const getFlashDeals = () => products.filter((p) => p.isFlashDeal);
export const getProductById = (id: string) => products.find((p) => p.id === id);

export const colorMap: Record<string, string> = {
  'Black': '#000000',
  'White': '#ffffff',
  'Red': '#ff0000',
  'Blue': '#0000ff',
  'Pink': '#ffc0cb',
  'Tan': '#d2b48c',
  'Grey': '#808080',
  'Olive': '#808000',
  'Green': '#008000'
};

export const sizeGuideData = [
  {eu: 38, uk: 5, us: 6, cm: 23.5},
  {eu: 39, uk: 6, us: 7, cm: 24.5},
  {eu: 40, uk: 6.5, us: 7.5, cm: 25.0},
  {eu: 41, uk: 7, us: 8, cm: 26.0},
  {eu: 42, uk: 8, us: 9, cm: 27.0},
  {eu: 43, uk: 9, us: 10, cm: 28.0},
  {eu: 44, uk: 10, us: 11, cm: 29.0}
];