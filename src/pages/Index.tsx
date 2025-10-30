import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
          <img 
            src={heroImage} 
            alt="Hero" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center space-y-6 px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Modern Essentials
            </h1>
            <p className="text-xl text-white/90 max-w-md mx-auto">
              Minimalist men's fashion for the bold
            </p>
            <Link to="/collections">
              <Button size="lg" variant="secondary" className="font-medium mt-4">
                Shop Collection
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
            <p className="text-muted-foreground">Fresh styles for the season</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/collections">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Less Is More</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of simplicity. Each piece is carefully designed
                to elevate your everyday wardrobe with timeless style and uncompromising quality.
                Build your essential collection with pieces that matter.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
