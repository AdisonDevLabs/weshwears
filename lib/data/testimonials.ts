// lib/data/testimonials.ts

export interface Testimonial {
  id: string | number;
  name: string;
  location?: string;
  rating: number;
  text: string;
  product?: string;
  profile: string;
  date?: string;
  purchased?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John M. – Nairobi",
    location: "Nairobi",
    rating: 5,
    text: "The Nike Shox are exactly as described! I really appreciated the payment after delivery option here in Nairobi. Makes shopping so much safer. Highly recommend Wesh Wears!", //[cite: 6]
    product: "Nike Shox x Supreme Olive",
    profile: "https://picsum.photos/seed/john/150/150",
  },
  {
    id: 2,
    name: "Sarah K. – Nairobi",
    location: "Nairobi",
    rating: 5,
    text: "Got the Birkenstock Clogs and they are perfect for my weekend outfits. Super easy order process via WhatsApp and I paid only after checking the item. Trusted shop!", //[cite: 6]
    product: "Birkenstock Suede Clog",
    profile: "https://picsum.photos/seed/sarah/150/150",
  },
  {
    id: 3,
    name: "David O. – Nairobi",
    location: "Nairobi",
    rating: 5,
    text: "The Reebok Club C quality is top tier. Wesh Wears is definitely my go-to plug for sneakers in Nairobi. Fast service and legit payment after delivery.", //[cite: 6]
    product: "Reebok Club C Green/White",
    profile: "https://picsum.photos/seed/david/150/150",
  },
];

export const productReviews: Testimonial[] = [
  {
    id: 1,
    name: "Faith N.",
    location: "Nairobi",
    rating: 5,
    date: "2 days ago",
    text: "The New Balance 2002R quality is amazing. Customer service on WhatsApp is super fast and I love the payment after delivery option within Nairobi.", //[cite: 6]
    purchased: true,
    product: "New Balance 2002R Pink/White",
    profile: "https://picsum.photos/seed/faith/150/150",
  },
  {
    id: 2,
    name: "Mike O.",
    location: "Nairobi",
    rating: 5,
    date: "1 week ago",
    text: "Trusted shop for sure. These LV Trainers are clean and the delivery within Nairobi was very smooth. Paid after I confirmed the quality.", //[cite: 6]
    purchased: true,
    product: "LV Trainer Red/White",
    profile: "https://picsum.photos/seed/mike/150/150",
  },
];

export const reviewAvatars = [
  "https://picsum.photos/seed/user1/100/100",
  "https://picsum.photos/seed/user2/100/100",
  "https://picsum.photos/seed/user3/100/100"
];

export const reviewStats = {
  averageRating: "4.9/5 Average Rating",
  totalCustomers: "2,600+ Happy Customers" //[cite: 6]
};