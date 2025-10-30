import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");

  const sizes = ["XS", "S", "M", "L", "XL"];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/collections">
            <Button>Back to Collections</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    toast.success("Added to cart", {
      description: `${product.name} - Size ${selectedSize}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <Link to="/collections" className="inline-flex items-center gap-2 text-sm mb-8 hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Collections
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-[3/4] bg-secondary overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-2xl font-bold">${product.price}</p>
              </div>

              <div className="border-t border-b border-border py-6 space-y-4">
                <div>
                  <label className="text-sm font-medium mb-3 block">Select Size</label>
                  <div className="flex gap-2">
                    {sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedSize(size)}
                        className="w-12"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full" onClick={handleAddToCart}>
                Add to Cart
              </Button>

              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-medium mb-2">Product Details</h3>
                  <p className="text-muted-foreground">
                    Premium quality construction with attention to detail. Made from sustainable
                    materials for lasting comfort and durability.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Shipping & Returns</h3>
                  <p className="text-muted-foreground">
                    Free shipping on orders over $100. 30-day return policy. See our shipping
                    and returns page for more details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
