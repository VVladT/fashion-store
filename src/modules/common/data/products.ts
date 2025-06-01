import { Product } from "@/modules/products/model/product.interface";

export const productData = [
  {
    id: "1",
    name: "Camisa de algodón",
    SKU: "MOD001",
    description: "Camisa cómoda de algodón perfecta para el uso diario.",
    slug: "camisa-algodon",
    stock: 20,
    price: 25,
    images: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/28297697/pexels-photo-28297697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    category: { id: 1, name: "Casual", slug: "casual" },
  },
  {
    id: "2",
    name: "Zapatillas",
    SKU: "MOD002",
    description: "Zapatillas de plantilla suave, ideal para caminatas.",
    slug: "zapatillas",
    stock: 30,
    price: 50,
    images: [
      {
        id: 2,
        url: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    category: { id: 1, name: "Casual", slug: "casual" },
  },
  {
    id: "3",
    name: "Blazer elegante",
    SKU: "MOD003",
    description: "Blazer formal para un look profesional en la oficina.",
    slug: "blazer-elegante",
    stock: 15,
    price: 70,
    images: [
      {
        id: 3,
        url: "https://images.pexels.com/photos/883362/pexels-photo-883362.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    category: { id: 3, name: "Oficina", slug: "oficina" },
  },
  {
    id: "4",
    name: "Vestido de noche",
    SKU: "MOD004",
    description: "Vestido elegante ideal para fiestas y celebraciones.",
    slug: "vestido-fiesta",
    stock: 10,
    price: 95,
    images: [
      {
        id: 4,
        url: "https://images.pexels.com/photos/6942543/pexels-photo-6942543.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      },
    ],
    category: { id: 4, name: "Fiesta", slug: "fiesta" },
  },
  {
    id: "5",
    name: "Shorts playeros",
    SKU: "MOD005",
    description: "Shorts frescos y cómodos para el verano y la playa.",
    slug: "shorts-verano",
    stock: 25,
    price: 20,
    images: [
      {
        id: 5,
        url: "https://images.pexels.com/photos/17744874/pexels-photo-17744874/free-photo-of-hombre-playa-pantalones-cortos-shorts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    category: { id: 5, name: "Verano", slug: "verano" },
  },
  {
    id: "6",
    name: "Abrigo de lana",
    SKU: "MOD006",
    description: "Abrigo térmico de lana para protegerse del frío invernal.",
    slug: "abrigo-invierno",
    stock: 12,
    price: 120,
    images: [
      {
        id: 6,
        url: "https://images.pexels.com/photos/8732471/pexels-photo-8732471.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      },
    ],
    category: { id: 6, name: "Invierno", slug: "invierno" },
  },
  {
    id: "7",
    name: "Jeans ajustados",
    SKU: "MOD007",
    description:
      "Jeans clásicos con corte ajustado para un look casual moderno.",
    slug: "jeans-ajustados",
    stock: 18,
    price: 45,
    images: [
      {
        id: 7,
        url: "https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    category: { id: 1, name: "Casual", slug: "casual" },
  },
  {
    id: "8",
    name: "Top deportivo",
    SKU: "MOD008",
    description: "Top cómodo y transpirable para rutinas intensas.",
    slug: "top-deportivo",
    stock: 22,
    price: 28,
    images: [
      {
        id: 8,
        url: "https://images.pexels.com/photos/19985572/pexels-photo-19985572/free-photo-of-mujer-modelo-maqueta-parte-superior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    category: { id: 2, name: "Deportiva", slug: "deportiva" },
  },
  {
    id: "9",
    name: "Camisa formal blanca",
    SKU: "MOD009",
    description: "Camisa blanca de corte clásico para ocasiones laborales.",
    slug: "camisa-oficina-blanca",
    stock: 14,
    price: 40,
    images: [
      {
        id: 9,
        url: "https://images.pexels.com/photos/7984725/pexels-photo-7984725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    category: { id: 3, name: "Oficina", slug: "oficina" },
  },
  {
    id: "10",
    name: "Bufanda de invierno",
    SKU: "MOD010",
    description: "Bufanda suave y cálida ideal para el invierno.",
    slug: "bufanda-invierno",
    stock: 30,
    price: 15,
    images: [
      {
        id: 10,
        url: "https://images.pexels.com/photos/3605077/pexels-photo-3605077.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      },
    ],
    category: { id: 6, name: "Invierno", slug: "invierno" },
  },
];
