export default interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

export const productsToPreLoad: IProduct[] = [
  {
    id: 1,
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://ik.imagekit.io/p2ho5d9bi/E-Commerce/iphone11.jpg?updatedAt=1755005058145",
    categoryId: 10,
    stock: 10,
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://ik.imagekit.io/p2ho5d9bi/E-Commerce/macbookair.jpeg?updatedAt=1755005057791",
    categoryId: 11,
    stock: 10,
  },
  {
    id: 3,
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://ik.imagekit.io/p2ho5d9bi/E-Commerce/ipadPro.webp?updatedAt=1755005057519",
    categoryId: 12,
    stock: 10,
  },
  {
    id: 4,
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://ik.imagekit.io/p2ho5d9bi/E-Commerce/AppleWatchSeries6.jpeg?updatedAt=1755005060979",
    categoryId: 18,
    stock: 10,
  },
  {
    id: 5,
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://ik.imagekit.io/p2ho5d9bi/E-Commerce/airpodspro2.jpeg?updatedAt=1755005057500",
    categoryId: 13,
    stock: 10,
  },
  {
    id: 6,
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://ik.imagekit.io/p2ho5d9bi/E-Commerce/homepod-mini.jpg?updatedAt=1755005058515",
    categoryId: 13,
    stock: 10,
  },
  {
    id: 7,
    name: "Apple Vision Pro",
    price: 3499,
    description:
      "Step into the future with Apple Vision Pro: augmented reality redefined with immersive visuals and seamless integration into your digital life.",
    image:
      "https://ik.imagekit.io/p2ho5d9bi/E-Commerce/applevisionpro.jpg?updatedAt=1755005060927",
    categoryId: 18,
    stock: 5,
  },
  {
    id: 8,
    name: "Apple TV 4K",
    price: 800,
    description:
      "Bring cinema to your home with Apple TV 4K: stunning picture quality, Dolby Atmos sound, and access to your favorite streaming apps.",
    image:
      "https://ik.imagekit.io/p2ho5d9bi/E-Commerce/appletv4k.webp?updatedAt=1755005060606",
    categoryId: 16,
    stock: 4,
  },
  {
    id: 9,
    name: "Mac Studio",
    price: 1999,
    description:
      "Unleash creative potential with Mac Studio: blazing-fast M-series chips, high performance, and compact power for pros.",
    image:
      "https://ik.imagekit.io/p2ho5d9bi/E-Commerce/macstudio.jpg?updatedAt=1755005057802",
    categoryId: 11,
    stock: 7,
  },
  {
    id: 10,
    name: "iPad Mini",
    price: 499,
    description:
      "Portability meets performance with the iPad Mini: small size, A15 chip, and Apple Pencil support for powerful productivity anywhere.",
    image:
      "https://ik.imagekit.io/p2ho5d9bi/E-Commerce/ipadmini.jpeg?updatedAt=1755005057796",
    categoryId: 12,
    stock: 4,
  },
  {
    id: 11,
    name: "Apple Watch Ultra",
    price: 799,
    description:
      "Designed for adventure: Apple Watch Ultra is rugged, capable, and built to meet the demands of endurance athletes and explorers.",
    image:
      "https://ik.imagekit.io/p2ho5d9bi/E-Commerce/AppleWatchUltra.jpg?updatedAt=1755005057570",
    categoryId: 18,
    stock: 8,
  },
  {
    id: 12,
    name: "AirPods Max",
    price: 549,
    description:
      "High-fidelity audio meets over-ear luxury: AirPods Max delivers immersive sound, active noise cancellation, and premium design.",
    image:
      "https://ik.imagekit.io/p2ho5d9bi/E-Commerce/airpodsmax.webp?updatedAt=1755005058166",
    categoryId: 13,
    stock: 10,
  },
  {
    id: 13,
    name: "HomePod 2nd Gen",
    price: 299,
    description:
      "Reimagined sound for your home with HomePod 2nd Gen: intelligent assistant, spatial awareness, and deep bass in a sleek design.",
    image:
      "https://ik.imagekit.io/p2ho5d9bi/E-Commerce/AppleHomePod2ndGen.jpg?updatedAt=1755005058034",
    categoryId: 13,
    stock: 5,
  },
];
