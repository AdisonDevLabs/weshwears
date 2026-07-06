// lib/data/brand.ts[cite: 6]

import { Truck, MessageCircle, Star, Sparkles, Tag, CheckCircle, ShieldCheck } from 'lucide-react';

export const brand = {
  name: "𝐖𝐄𝐒𝐇♔ 𝐖ears",
  url: 'https://weshwears.storxia.tech',
  shortName: "𝐖𝐄𝐒𝐇♔",
  logo: "/brand-logo.jpeg",
  tagline: "⚚𝐖esh𝐖ears 𝐂𝐎𝐋𝐋𝐄𝐂𝐓𝐈𝐎𝐍⚚",
  description:
    "Your trusted online shop based in Nairobi, Kenya. We offer a wide selection of quality fashion wear with payment after delivery within Nairobi. Order easily via Call or WhatsApp.",
  location: "Nairobi, Kenya",
  seo: {
    title: "𝐖𝐄𝐒𝐇♔ | Trusted Online Shop & Collection",
    description: "Shop the latest Wesh Wears collection in Nairobi. Trusted online shop with payment after delivery options available.",
    ogImage: '/og-preview.png',
    favicon: '/favicon.ico',
    appleIcon: '/apple-touch-icon.png',
  },

  hero: {
    badge: "14K Likes on TikTok ⚡",
    headlineTop: "STEP INTO",
    headlineHighlight: "CONFIDENCE",
    backgroundImage: "/1.png",
    ctaPrimary: "Order on WhatsApp",
    ctaSecondary: "Shop Collection",
  },

  sections: {
    featured: {
      title: "Featured Collection",
      subtitle: "Find your perfect look. Browse our curated selection of quality styles."
    },
    flashDeals: {
      badge: "Live Offers",
      title: "Flash Deals",
      subtitle: "Cop your favorite items at unbeatable prices before stocks run out.",
      cta: "View All Deals"
    },
    newArrivals: {
      badge: "Just Dropped",
      title: "Latest Arrivals",
      subtitle: "Fresh items added directly from our TikTok feed — step out in the latest trends.",
      cta: "View All Arrivals",
      trendingBadgePrefix: "Trending in"
    },
    bestSellers: {
      badge: "Customer Favorites",
      title: "BEST SELLERS",
      subtitle: "Highly reviewed and loved by our community in Nairobi.",
      cta: "View All Favorites"
    },
    whyUs: {
      badge: "Trust & Reliability",
      titleTop: "WHY SHOP WITH",
      subtitle: "We offer quality fashion wear, trusted service, and payment after delivery within Nairobi."
    },
    reviews: {
      badge: "Real Feedback from TikTok",
      titleTop: "WHAT OUR",
      titleBottom: "CUSTOMERS SAY"
    },
    whatsappCta: {
      badge: "We Are Active",
      titleTop: "LOCK IN",
      titleBottom: "YOUR ORDER",
      subtitle: "Chat with us directly on WhatsApp to secure your items and confirm your delivery details."
    }
  },

  whatsappNumber: "254729367112",
  whatsappMessage: {
    general:
      "Hello Wesh Wears,\n\nI would like to place an order.\n\nItem Name/Screenshot:\n\nSize:\n\nDelivery/Pickup Location:\n\nPlease confirm availability. Thank you",
  },
  socialLinks: {
    instagram: "https://instagram.com/weshwears",
    facebook: "https://facebook.com/weshwears",
    tiktok: "https://www.tiktok.com/@weshwears",
  },
  deliveryInfo: {
    standard: "Trusted online shop. 🚚",
    Nairobi: "Payment after delivery within Nairobi.",
  },
  trustStatements: [
    "14K+ TikTok Likes",
    "Payment after delivery in Nairobi ✅",
    "Nairobi, Kenya 🇰🇪📍",
    "Call or WhatsApp to Order",
  ],
  features: [
    {
      title: "Quality Collection",
      description: "We stock a versatile range of stylish, high-quality fashion wear to suit your everyday needs."
    },
    {
      title: "Payment After Delivery",
      description: "Shop with confidence with our payment after delivery option within Nairobi."
    },
    {
      title: "Easy Ordering",
      description: "Place your order effortlessly by calling or texting us on WhatsApp."
    },
    {
      title: "Active Support",
      description: "Reach us anytime on 0729367112 for instant order processing."
    }
  ],
  whatsappTrustSignals: [
    "Replies within minutes",
    "Safe & secure shop",
    "Payment after delivery",
    "Verified Wesh Wears"
  ],
  whatsappMockChat: [
    {
      sender: "user",
      text: `Hello Wesh Wears

I'd like to order:

• Item Name
Size: ...

Delivery: Nairobi CBD

Please confirm availability and delivery timeframe.

Thank you.`,
      time: "10:30 AM" },
    { sender: "brand",
      text: `Hello! Yes, that item is available.

We can process your order immediately for payment after delivery in Nairobi! 🚚`,
      time: "10:32 AM"
    }
  ],
  salesCallout: "Upgrade Your Style Today! 🚚",

  featuredImages: [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png"
  ]
};

export const announcementMessages = [
  { text: "Trusted Online Shop in Nairobi 🇰🇪", icon: Star },
  { text: "Order via Call or WhatsApp (0729367112)", icon: MessageCircle },
  { text: "14K Likes on TikTok", icon: Sparkles },
  { text: "Payment after delivery within Nairobi 🚚", icon: Truck },
  { text: "Send us a DM to secure your order!", icon: Tag },
];

export const cartTrustFeatures = [
  { text: "Payment after delivery (Nairobi) 🚚", icon: Truck },
  { text: "Quality Fashion Collection", icon: CheckCircle },
  { text: "Easy Ordering via Call/WhatsApp", icon: MessageCircle },
  { text: "Trusted Customer Support", icon: ShieldCheck },
];

export const footerQuickShopLinks = [
  { label: "New Arrivals", href: "/shop?category=new-arrivals" },
  { label: "Best Sellers", href: "/shop?category=best-sellers" },
  { label: "Collection", href: "/shop" },
];

export const footerSupportLinks = [
  { label: "How to Order", href: "/how-to-order" },
  { label: "Delivery Info", href: "/delivery" },
  { label: "FAQ", href: "/faq" },
];