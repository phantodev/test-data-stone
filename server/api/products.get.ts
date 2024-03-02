export default defineEventHandler((event) => {
  return {
    products: [
      {
        id: 1,
        name: "Smartphone Iphone X",
        brand: "TechCo",
        price: 799.99,
        description: "The latest flagship smartphone with advanced features.",
        image: "https://example.com/productX.jpg",
        category: "Smartphones",
      },
      {
        id: 2,
        name: "Laptop Pro",
        brand: "EliteComputers",
        price: 1299.99,
        description: "Powerful laptop for professionals and gamers alike.",
        image: "https://example.com/productLaptop.jpg",
        category: "Laptops",
      },
      {
        id: 3,
        name: "Smart Watch 2000",
        brand: "GadgetTech",
        price: 199.99,
        description:
          "Stay connected with this sleek and feature-rich smartwatch.",
        image: "https://example.com/productSmartWatch.jpg",
        category: "Wearable Devices",
      },
      {
        id: 4,
        name: "Wireless Headphones",
        brand: "SoundMaster",
        price: 149.99,
        description:
          "Immerse yourself in your favorite music with these high-quality wireless headphones.",
        image: "https://example.com/productHeadphones.jpg",
        category: "Audio",
      },
      {
        id: 5,
        name: "4K Ultra HD TV",
        brand: "VisionTech",
        price: 1799.99,
        description:
          "Experience stunning clarity and vibrant colors with this 4K Ultra HD TV.",
        image: "https://example.com/productTV.jpg",
        category: "Televisions",
      },
      {
        id: 6,
        name: "Gaming Console X",
        brand: "GameMaster",
        price: 499.99,
        description:
          "Unlock a world of entertainment and gaming with this powerful gaming console.",
        image: "https://example.com/productConsole.jpg",
        category: "Gaming",
      },
      // Add more products as needed
    ],
  };
});
