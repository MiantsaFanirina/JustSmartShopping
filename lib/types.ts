export type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  regularPrice?: number;
  salePrice?: number;
  onSale: boolean;
  description: string;
  shortDescription?: string;
  categories: string[];
  images: {
    id: string;
    src: string;
    alt?: string;
  }[];
  stock: {
    quantity: number;
    status: 'instock' | 'outofstock' | 'onbackorder';
  };
  dateCreated: string;
  dateModified?: string;
  attributes?: Array<{
    name: string;
    options: string[];
  }>;
  variations?: string[];
  type: 'simple' | 'variable' | 'grouped' | 'external';
};

export type OrderStatus = 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed';

export type Order = {
  id: string;
  status: OrderStatus;
  dateCreated: string;
  dateModified?: string;
  total: number;
  shipping: {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  customer: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  lineItems: Array<{
    id: string;
    productId: string;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
    total: number;
    variation?: Array<{
      attribute: string;
      value: string;
    }>;
  }>;
  paymentMethod: string;
  paymentMethodTitle: string;
  notes?: string;
};

export type SalesData = {
  date: string;
  revenue: number;
  orders: number;
};

export type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateCreated: string;
  totalSpent: number;
  ordersCount: number;
  lastOrder?: string;
};

export type NotificationType = 'order' | 'inventory' | 'review' | 'system';

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  dateCreated: string;
  linkTo?: string;
  priority: 'low' | 'medium' | 'high';
};