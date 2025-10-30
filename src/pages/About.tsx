import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h1 className="text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl text-muted-foreground">
                Crafting timeless essentials for the modern individual
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  rex rainment's was born from a simple belief: fashion should be timeless,
                  not trendy. We create pieces that transcend seasons, focusing on quality
                  craftsmanship and minimalist design that speaks to the modern, discerning individual.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In a world of fast fashion and fleeting trends, we stand for something different.
                  Every piece in our collection is designed with intention—to be worn, loved, and
                  kept for years to come.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in the power of simplicity. Clean lines, neutral palettes, and
                  versatile silhouettes form the foundation of our design language. Each garment
                  is a blank canvas for self-expression, ready to adapt to your unique style.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Quality & Sustainability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We source premium materials and work with ethical manufacturers who share our
                  commitment to quality and sustainability. From the first sketch to the final
                  stitch, every step is carefully considered.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach to sustainability is simple: create less, but better. By focusing
                  on timeless designs and durable construction, we reduce waste and encourage
                  conscious consumption.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
                <p className="text-muted-foreground leading-relaxed">
                  rex rainment's is more than a brand—it's a community of individuals who value
                  quality, authenticity, and intentional living. We invite you to join us in
                  redefining what modern menswear can be.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
