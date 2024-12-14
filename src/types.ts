export type User = {
  email: string;
  _id: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
}

export type Restaurant = {
  _id: string;
  user: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: [];
  menuItems: MenuItem[];
  imageUrl: string;
  lastUpdated: string;
}

export type MenuItem = {
  _id: string;
  name: string;
  price: number;
}