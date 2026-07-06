// lib/data/categories.ts

export interface Category {
  name: string;
  slug: string;
  label?: string;
  image: string;
  span?: string;
}

export const categories: Category[] = [
  {
    name: "SNEAKERS",
    slug: "sneakers",
    label: "Premium Kicks",
    image: "/10.png", //[cite: 6]
    span: "md:col-span-1",
  },
  {
    name: "CASUAL & BOOTS",
    slug: "casual-boots",
    label: "Smart Everyday Wear",
    image: "/1.png", //[cite: 6]
    span: "md:col-span-1",
  },
  {
    name: "NEW ARRIVALS",
    slug: "new-arrivals",
    label: "Fresh Drops",
    image: "/4.png", //[cite: 6]
    span: "md:col-span-1",
  },
];

export const heroCategories = categories.slice(0, 5);

export const discoveryChips = [
  { id: 'trending', label: '🔥 Trending', context: 'Trending Styles' },
  { id: 'best-sellers', label: '💯 Best Sellers', context: 'Best Sellers' },
  { id: 'just-dropped', label: '🆕 Just Dropped', context: 'New Arrivals' },
  { id: 'sneakers', label: '👟 Sneakers', context: 'Premium Kicks' },
  { id: 'casual', label: '👞 Casual & Boots', context: 'Smart Everyday Wear' },
];

export const filterCategories = ['All', 'Sneakers', 'Boots', 'Casual', 'New Arrivals'];

export const searchSuggestions = ['Nike Shox x Supreme', 'New Balance 2002R', 'Birkenstock Suede Clog', 'Reebok Club C', 'Nike P.6000'];

export const navSearchSuggestions = ['Sneakers', 'Boots', 'Casual', 'New Arrivals'];

export const navLinksData = [
  { label: "Shop All", href: "/shop", baseTextClass: "text-white", hoverTextClass: "hover:text-[#C6FF00]", underlineClass: "bg-[#C6FF00]", isLive: false },
  { label: "New Drops", href: "/shop?category=new-arrivals", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-white", underlineClass: "bg-white", isLive: false },
  { label: "Trending", href: "/shop?category=trending", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-white", underlineClass: "bg-white", isLive: false },
  { label: "Offers", href: "/shop?category=offers", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-[#FF0000]", underlineClass: "bg-[#FF0000]", isLive: true },
];

export const priceRanges = ['Under 4000', '4000 - 5000', 'Over 5000'];

export const filterSizes = ['38', '39', '40', '41', '42', '43', '44'];