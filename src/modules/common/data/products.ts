import { Product } from "@/modules/products/model/product.model";

export const productData: Product[] = [
  {
    id: 1,
    title: "Camisa de algodón",
    slug: "camisa-algodon",
    price: 25,
    description: "Camisa cómoda de algodón perfecta para el uso diario.",
    images: [
      "https://images.pexels.com/photos/28297697/pexels-photo-28297697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: {
      id: 1,
      name: "Casual",
      slug: "casual",
      image: "",
      creationAt: new Date(),
      updatedAt: new Date()
    },
    creationAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    title: "Zapatillas",
    slug: "zapatillas",
    price: 50,
    description: "Zapatillas de plantilla suave, ideal para caminatas.",
    images: [
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: {
      id: 1,
      name: "Casual",
      slug: "casual",
      image: "",
      creationAt: new Date(),
      updatedAt: new Date()
    },
    creationAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    title: "Blazer elegante",
    slug: "blazer-elegante",
    price: 70,
    description: "Blazer formal para un look profesional en la oficina.",
    images: [
      "https://images.pexels.com/photos/883362/pexels-photo-883362.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: {
      id: 3,
      name: "Oficina",
      slug: "oficina",
      image: "",
      creationAt: new Date(),
      updatedAt: new Date()
    },
    creationAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    title: "Vestido de noche",
    slug: "vestido-fiesta",
    price: 95,
    description: "Vestido elegante ideal para fiestas y celebraciones.",
    images: [
      "https://images.pexels.com/photos/6942543/pexels-photo-6942543.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    ],
    category: {
      id: 4,
      name: "Fiesta",
      slug: "fiesta",
      image: "",
      creationAt: new Date(),
      updatedAt: new Date()
    },
    creationAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    title: "Shorts playeros",
    slug: "shorts-verano",
    price: 20,
    description: "Shorts frescos y cómodos para el verano y la playa.",
    images: [
      "https://images.pexels.com/photos/17744874/pexels-photo-17744874/free-photo-of-hombre-playa-pantalones-cortos-shorts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: {
      id: 5,
      name: "Verano",
      slug: "verano",
      image: "",
      creationAt: new Date(),
      updatedAt: new Date()
    },
    creationAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 6,
    title: "Abrigo de lana",
    slug: "abrigo-invierno",
    price: 120,
    description: "Abrigo térmico de lana para protegerse del frío invernal.",
    images: [
      "https://images.pexels.com/photos/8732471/pexels-photo-8732471.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    ],
    category: {
      id: 6,
      name: "Invierno",
      slug: "invierno",
      image: "",
      creationAt: new Date(),
      updatedAt: new Date()
    },
    creationAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 7,
    title: "Jeans ajustados",
    slug: "jeans-ajustados",
    price: 45,
    description: "Jeans clásicos con corte ajustado para un look casual moderno.",
    images: [
      "https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: {
      id: 1,
      name: "Casual",
      slug: "casual",
      image: "",
      creationAt: new Date(),
      updatedAt: new Date()
    },
    creationAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 8,
    title: "Top deportivo",
    slug: "top-deportivo",
    price: 28,
    description: "Top cómodo y transpirable para rutinas intensas.",
    images: [
      "https://images.pexels.com/photos/19985572/pexels-photo-19985572/free-photo-of-mujer-modelo-maqueta-parte-superior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: {
      id: 2,
      name: "Deportiva",
      slug: "deportiva",
      image: "",
      creationAt: new Date(),
      updatedAt: new Date()
    },
    creationAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 9,
    title: "Camisa formal blanca",
    slug: "camisa-oficina-blanca",
    price: 40,
    description: "Camisa blanca de corte clásico para ocasiones laborales.",
    images: [
      "https://images.pexels.com/photos/7984725/pexels-photo-7984725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: {
      id: 3,
      name: "Oficina",
      slug: "oficina",
      image: "",
      creationAt: new Date(),
      updatedAt: new Date()
    },
    creationAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 10,
    title: "Bufanda de invierno",
    slug: "bufanda-invierno",
    price: 15,
    description: "Bufanda suave y cálida ideal para el invierno.",
    images: [
      "https://images.pexels.com/photos/3605077/pexels-photo-3605077.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    ],
    category: {
      id: 6,
      name: "Invierno",
      slug: "invierno",
      image: "",
      creationAt: new Date(),
      updatedAt: new Date()
    },
    creationAt: new Date(),
    updatedAt: new Date()
  }
];
