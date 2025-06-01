export interface Product {
  id: string;
  name: string;
  SKU: string;
  description: string;
  slug: string;
  stock: number;
  price: number;
  images: Image[];
  category: ProductCategory;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
}

export interface Image {
  id: number;
  url: string;
}
