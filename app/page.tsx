import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Sparkles, Clock, Star, Phone } from 'lucide-react';
import productsData from '@/data/products.json';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = productsData.products.filter(p => p.featured);
  const whatsappNumber = '7718096969';

  return (
    <div className="bg-black">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/6585611/pexels-photo-6585611.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury Hardware"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Premium Architectural
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mt-2">
              Hardware
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Elevate your interiors with luxury fittings crafted for perfection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="group bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:from-amber-600 hover:to-amber-700 transition-all hover:shadow-lg hover:shadow-amber-500/50 transform hover:-translate-y-1"
            >
              Explore Products
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in Luxora Hardware products`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              Explore Our <span className="text-amber-400">Categories</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover premium hardware solutions for every space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData.categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              Featured <span className="text-amber-400">Products</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Handpicked selections from our premium collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.images[0]}
                material={product.material}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all hover:shadow-lg hover:shadow-amber-500/50"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-amber-400">Luxora</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Excellence in every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center hover:border-amber-500/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-black" size={32} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">High Quality Materials</h3>
              <p className="text-gray-400">
                Premium brass, stainless steel, and crystal materials sourced from the finest suppliers worldwide
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center hover:border-amber-500/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-black" size={32} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Modern Designs</h3>
              <p className="text-gray-400">
                Contemporary aesthetics that complement any architectural style with timeless elegance
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center hover:border-amber-500/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-black" size={32} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Durable & Reliable</h3>
              <p className="text-gray-400">
                Built to last with rigorous quality control and backed by our commitment to excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              What Our <span className="text-amber-400">Clients Say</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Trusted by designers, architects, and homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productsData.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-amber-500/50 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-amber-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-black mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with us today for personalized recommendations and expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in Luxora Hardware products`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zinc-900 transition-all hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Contact on WhatsApp
            </a>
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
            >
              View Contact Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
