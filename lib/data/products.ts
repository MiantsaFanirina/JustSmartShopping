import { Product } from "@/lib/types";

export const productsData: Product[] = [
  {
    id: "prod-01",
    name: "Premium Wireless Headphones",
    sku: "HDX-1000",
    price: 199.99,
    regularPrice: 249.99,
    salePrice: 199.99,
    onSale: true,
    description: "High-quality wireless headphones with noise cancellation, 30-hour battery life, and premium sound quality.",
    shortDescription: "Premium wireless headphones with noise cancellation.",
    categories: ["Electronics", "Audio", "Headphones"],
    images: [
      {
        id: "img-0101",
        src: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Black wireless headphones"
      },
      {
        id: "img-0102",
        src: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Headphones case view"
      }
    ],
    stock: {
      quantity: 45,
      status: "instock"
    },
    dateCreated: "2023-09-15T10:30:00Z",
    dateModified: "2023-10-05T14:20:00Z",
    attributes: [
      {
        name: "Color",
        options: ["Black", "White", "Blue"]
      }
    ],
    type: "simple"
  },
  {
    id: "prod-02",
    name: "Smart Fitness Watch",
    sku: "SFW-2000",
    price: 149.99,
    regularPrice: 149.99,
    onSale: false,
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, sleep tracking, and 7-day battery life.",
    shortDescription: "Advanced fitness tracking smartwatch.",
    categories: ["Electronics", "Wearables", "Fitness"],
    images: [
      {
        id: "img-0201",
        src: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Smart fitness watch with black band"
      }
    ],
    stock: {
      quantity: 28,
      status: "instock"
    },
    dateCreated: "2023-08-20T09:15:00Z",
    attributes: [
      {
        name: "Band Color",
        options: ["Black", "Blue", "Red", "Green"]
      },
      {
        name: "Size",
        options: ["Small", "Medium", "Large"]
      }
    ],
    type: "variable",
    variations: ["prod-02-var1", "prod-02-var2"]
  },
  {
    id: "prod-03",
    name: "Portable Bluetooth Speaker",
    sku: "PBS-500",
    price: 79.99,
    regularPrice: 99.99,
    salePrice: 79.99,
    onSale: true,
    description: "Waterproof, portable Bluetooth speaker with 20-hour battery life and exceptional sound quality for indoor and outdoor use.",
    shortDescription: "Waterproof portable Bluetooth speaker.",
    categories: ["Electronics", "Audio", "Speakers"],
    images: [
      {
        id: "img-0301",
        src: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Black portable Bluetooth speaker"
      }
    ],
    stock: {
      quantity: 52,
      status: "instock"
    },
    dateCreated: "2023-09-01T11:45:00Z",
    attributes: [
      {
        name: "Color",
        options: ["Black", "Blue", "Red"]
      }
    ],
    type: "simple"
  },
  {
    id: "prod-04",
    name: "Laptop Backpack",
    sku: "BPK-100",
    price: 59.99,
    regularPrice: 59.99,
    onSale: false,
    description: "Water-resistant backpack with padded laptop compartment, multiple pockets, and comfortable shoulder straps.",
    shortDescription: "Water-resistant laptop backpack.",
    categories: ["Accessories", "Bags", "Travel"],
    images: [
      {
        id: "img-0401",
        src: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Black laptop backpack"
      }
    ],
    stock: {
      quantity: 34,
      status: "instock"
    },
    dateCreated: "2023-07-10T13:20:00Z",
    attributes: [
      {
        name: "Color",
        options: ["Black", "Gray", "Navy"]
      }
    ],
    type: "simple"
  },
  {
    id: "prod-05",
    name: "Smartphone Fast Charger",
    sku: "CHG-200",
    price: 29.99,
    regularPrice: 29.99,
    onSale: false,
    description: "65W fast charger compatible with multiple devices, featuring GaN technology for efficient charging and compact design.",
    shortDescription: "65W multi-device fast charger.",
    categories: ["Electronics", "Accessories", "Chargers"],
    images: [
      {
        id: "img-0501",
        src: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "White smartphone charger"
      }
    ],
    stock: {
      quantity: 78,
      status: "instock"
    },
    dateCreated: "2023-08-05T16:10:00Z",
    type: "simple"
  },
  {
    id: "prod-06",
    name: "Wireless Ergonomic Mouse",
    sku: "MSE-300",
    price: 39.99,
    regularPrice: 49.99,
    salePrice: 39.99,
    onSale: true,
    description: "Ergonomic wireless mouse with adjustable DPI, silent clicks, and long battery life for comfortable all-day use.",
    shortDescription: "Ergonomic wireless mouse for comfortable use.",
    categories: ["Electronics", "Accessories", "Computer Peripherals"],
    images: [
      {
        id: "img-0601",
        src: "https://images.pexels.com/photos/5082577/pexels-photo-5082577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Black ergonomic wireless mouse"
      }
    ],
    stock: {
      quantity: 0,
      status: "outofstock"
    },
    dateCreated: "2023-09-22T10:00:00Z",
    type: "simple"
  },
  {
    id: "prod-07",
    name: "Smart Home Security Camera",
    sku: "CAM-400",
    price: 89.99,
    regularPrice: 89.99,
    onSale: false,
    description: "Indoor/outdoor security camera with 1080p HD video, night vision, motion detection, and smart app integration.",
    shortDescription: "Smart home security camera with app control.",
    categories: ["Electronics", "Smart Home", "Security"],
    images: [
      {
        id: "img-0701",
        src: "https://images.pexels.com/photos/3205439/pexels-photo-3205439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "White security camera"
      }
    ],
    stock: {
      quantity: 15,
      status: "instock"
    },
    dateCreated: "2023-09-10T09:30:00Z",
    type: "simple"
  },
  {
    id: "prod-08",
    name: "Premium Leather Wallet",
    sku: "WLT-100",
    price: 49.99,
    regularPrice: 49.99,
    onSale: false,
    description: "Handcrafted genuine leather wallet with RFID protection, multiple card slots, and slim design.",
    shortDescription: "Genuine leather wallet with RFID protection.",
    categories: ["Accessories", "Fashion", "Wallets"],
    images: [
      {
        id: "img-0801",
        src: "https://images.pexels.com/photos/946187/pexels-photo-946187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Brown leather wallet"
      }
    ],
    stock: {
      quantity: 25,
      status: "instock"
    },
    dateCreated: "2023-07-25T14:45:00Z",
    attributes: [
      {
        name: "Color",
        options: ["Brown", "Black", "Tan"]
      }
    ],
    type: "simple"
  }
];