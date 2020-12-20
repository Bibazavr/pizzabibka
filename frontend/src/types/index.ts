export interface Product {
  type: string;
  title: string;
  ingredients: string;
  image: string;
  price: number;
}

export interface User {
  address: string;
  currency: 'usd';
  email: string;
  id: string;
  phone: string;
}

export interface Register {
  id: string;
  token: string;
}

export interface Obtaining {
  id: string;
  token: string;
}
