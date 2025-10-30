import { Product } from "@/contexts/CartContext";
import hoodieImg from "@/assets/product-hoodie.jpg";
import jacketImg from "@/assets/product-jacket.jpg";
import pantsImg from "@/assets/product-pants.jpg";
import tshirtImg from "@/assets/product-tshirt.jpg";
import sneakersImg from "@/assets/product-sneakers.jpg";
import coatImg from "@/assets/product-coat.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Essential Black Hoodie",
    price: 89,
    image: hoodieImg,
    category: "tops",
  },
  {
    id: "2",
    name: "Denim Jacket",
    price: 149,
    image: jacketImg,
    category: "outerwear",
  },
  {
    id: "3",
    name: "Cargo Pants",
    price: 119,
    image: pantsImg,
    category: "bottoms",
  },
  {
    id: "4",
    name: "Classic White Tee",
    price: 45,
    image: tshirtImg,
    category: "tops",
  },
  {
    id: "5",
    name: "Leather Sneakers",
    price: 159,
    image: sneakersImg,
    category: "footwear",
  },
  {
    id: "6",
    name: "Wool Overcoat",
    price: 279,
    image: coatImg,
    category: "outerwear",
  },
];
