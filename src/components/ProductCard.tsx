import { Link } from "react-router-dom";
import { Product } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block overflow-hidden transition-transform hover:scale-[1.02]"
    >
      <div className="aspect-[3/4] bg-secondary overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm font-bold">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
