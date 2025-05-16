import { Order } from "@/lib/types";

export const ordersData: Order[] = [
  {
    id: "order-1001",
    status: "completed",
    dateCreated: "2025-04-10T14:23:45Z",
    total: 329.97,
    shipping: {
      firstName: "John",
      lastName: "Smith",
      address1: "123 Main St",
      city: "Boston",
      state: "MA",
      postcode: "02108",
      country: "US"
    },
    customer: {
      id: "cust-501",
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@example.com"
    },
    lineItems: [
      {
        id: "item-10011",
        productId: "prod-01",
        name: "Premium Wireless Headphones",
        price: 199.99,
        quantity: 1,
        subtotal: 199.99,
        total: 199.99
      },
      {
        id: "item-10012",
        productId: "prod-05",
        name: "Smartphone Fast Charger",
        price: 29.99,
        quantity: 1,
        subtotal: 29.99,
        total: 29.99
      },
      {
        id: "item-10013",
        productId: "prod-03",
        name: "Portable Bluetooth Speaker",
        price: 79.99,
        quantity: 1,
        subtotal: 79.99,
        total: 79.99
      }
    ],
    paymentMethod: "credit_card",
    paymentMethodTitle: "Credit Card (Visa)"
  },
  {
    id: "order-1002",
    status: "processing",
    dateCreated: "2025-04-12T09:15:22Z",
    total: 149.99,
    shipping: {
      firstName: "Emily",
      lastName: "Johnson",
      address1: "456 Oak Avenue",
      address2: "Apt 302",
      city: "San Francisco",
      state: "CA",
      postcode: "94107",
      country: "US"
    },
    customer: {
      id: "cust-502",
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily.j@example.com"
    },
    lineItems: [
      {
        id: "item-10021",
        productId: "prod-02",
        name: "Smart Fitness Watch",
        price: 149.99,
        quantity: 1,
        subtotal: 149.99,
        total: 149.99
      }
    ],
    paymentMethod: "paypal",
    paymentMethodTitle: "PayPal"
  },
  {
    id: "order-1003",
    status: "pending",
    dateCreated: "2025-04-13T16:45:10Z",
    total: 119.98,
    shipping: {
      firstName: "Michael",
      lastName: "Brown",
      address1: "789 Pine Street",
      city: "Chicago",
      state: "IL",
      postcode: "60601",
      country: "US"
    },
    customer: {
      id: "cust-503",
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.b@example.com"
    },
    lineItems: [
      {
        id: "item-10031",
        productId: "prod-06",
        name: "Wireless Ergonomic Mouse",
        price: 39.99,
        quantity: 1,
        subtotal: 39.99,
        total: 39.99
      },
      {
        id: "item-10032",
        productId: "prod-08",
        name: "Premium Leather Wallet",
        price: 49.99,
        quantity: 1,
        subtotal: 49.99,
        total: 49.99
      },
      {
        id: "item-10033",
        productId: "prod-05",
        name: "Smartphone Fast Charger",
        price: 29.99,
        quantity: 1,
        subtotal: 29.99,
        total: 29.99
      }
    ],
    paymentMethod: "bank_transfer",
    paymentMethodTitle: "Direct Bank Transfer"
  },
  {
    id: "order-1004",
    status: "on-hold",
    dateCreated: "2025-04-14T11:30:00Z",
    total: 89.99,
    shipping: {
      firstName: "Sarah",
      lastName: "Davis",
      address1: "321 Maple Road",
      city: "Seattle",
      state: "WA",
      postcode: "98101",
      country: "US"
    },
    customer: {
      id: "cust-504",
      firstName: "Sarah",
      lastName: "Davis",
      email: "sarah.d@example.com"
    },
    lineItems: [
      {
        id: "item-10041",
        productId: "prod-07",
        name: "Smart Home Security Camera",
        price: 89.99,
        quantity: 1,
        subtotal: 89.99,
        total: 89.99
      }
    ],
    paymentMethod: "credit_card",
    paymentMethodTitle: "Credit Card (Mastercard)"
  },
  {
    id: "order-1005",
    status: "completed",
    dateCreated: "2025-04-11T13:20:15Z",
    total: 199.99,
    shipping: {
      firstName: "David",
      lastName: "Wilson",
      address1: "567 Elm Court",
      city: "New York",
      state: "NY",
      postcode: "10001",
      country: "US"
    },
    customer: {
      id: "cust-505",
      firstName: "David",
      lastName: "Wilson",
      email: "david.w@example.com"
    },
    lineItems: [
      {
        id: "item-10051",
        productId: "prod-01",
        name: "Premium Wireless Headphones",
        price: 199.99,
        quantity: 1,
        subtotal: 199.99,
        total: 199.99
      }
    ],
    paymentMethod: "credit_card",
    paymentMethodTitle: "Credit Card (Amex)"
  },
  {
    id: "order-1006",
    status: "completed",
    dateCreated: "2025-04-09T10:05:30Z",
    total: 259.96,
    shipping: {
      firstName: "Jennifer",
      lastName: "Martinez",
      address1: "890 Cedar Lane",
      city: "Austin",
      state: "TX",
      postcode: "78701",
      country: "US"
    },
    customer: {
      id: "cust-506",
      firstName: "Jennifer",
      lastName: "Martinez",
      email: "jennifer.m@example.com"
    },
    lineItems: [
      {
        id: "item-10061",
        productId: "prod-03",
        name: "Portable Bluetooth Speaker",
        price: 79.99,
        quantity: 1,
        subtotal: 79.99,
        total: 79.99
      },
      {
        id: "item-10062",
        productId: "prod-04",
        name: "Laptop Backpack",
        price: 59.99,
        quantity: 3,
        subtotal: 179.97,
        total: 179.97
      }
    ],
    paymentMethod: "paypal",
    paymentMethodTitle: "PayPal"
  },
  {
    id: "order-1007",
    status: "cancelled",
    dateCreated: "2025-04-08T15:40:22Z",
    total: 149.99,
    shipping: {
      firstName: "Robert",
      lastName: "Taylor",
      address1: "432 Birch Street",
      city: "Denver",
      state: "CO",
      postcode: "80202",
      country: "US"
    },
    customer: {
      id: "cust-507",
      firstName: "Robert",
      lastName: "Taylor",
      email: "robert.t@example.com"
    },
    lineItems: [
      {
        id: "item-10071",
        productId: "prod-02",
        name: "Smart Fitness Watch",
        price: 149.99,
        quantity: 1,
        subtotal: 149.99,
        total: 149.99
      }
    ],
    paymentMethod: "credit_card",
    paymentMethodTitle: "Credit Card (Visa)",
    notes: "Customer requested cancellation due to ordering mistake."
  },
  {
    id: "order-1008",
    status: "processing",
    dateCreated: "2025-04-13T14:10:45Z",
    total: 169.98,
    shipping: {
      firstName: "Lisa",
      lastName: "Anderson",
      address1: "765 Willow Drive",
      city: "Miami",
      state: "FL",
      postcode: "33101",
      country: "US"
    },
    customer: {
      id: "cust-508",
      firstName: "Lisa",
      lastName: "Anderson",
      email: "lisa.a@example.com"
    },
    lineItems: [
      {
        id: "item-10081",
        productId: "prod-05",
        name: "Smartphone Fast Charger",
        price: 29.99,
        quantity: 1,
        subtotal: 29.99,
        total: 29.99
      },
      {
        id: "item-10082",
        productId: "prod-06",
        name: "Wireless Ergonomic Mouse",
        price: 39.99,
        quantity: 1,
        subtotal: 39.99,
        total: 39.99
      },
      {
        id: "item-10083",
        productId: "prod-04",
        name: "Laptop Backpack",
        price: 59.99,
        quantity: 1,
        subtotal: 59.99,
        total: 59.99
      },
      {
        id: "item-10084",
        productId: "prod-05",
        name: "Smartphone Fast Charger",
        price: 29.99,
        quantity: 1,
        subtotal: 29.99,
        total: 29.99
      }
    ],
    paymentMethod: "credit_card",
    paymentMethodTitle: "Credit Card (Discover)"
  }
];