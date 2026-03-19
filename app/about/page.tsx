import Image from 'next/image';
import { Award, Shield, Users, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">
            About <span className="text-amber-400">Luxora Hardware</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Crafting excellence in architectural hardware for over a decade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/6585611/pexels-photo-6585611.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Luxora Hardware"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-4xl font-bold text-white">Our Story</h2>
            <p className="text-gray-400 leading-relaxed">
              Founded with a vision to redefine architectural hardware, Luxora Hardware has been at the
              forefront of luxury interior fittings for over 10 years. We believe that every detail matters
              in creating exceptional spaces.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our journey began with a simple philosophy: to create hardware that combines timeless elegance
              with modern functionality. Today, we work with leading architects, interior designers, and
              homeowners to bring their visions to life.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Every piece in our collection is carefully curated and crafted to meet the highest standards
              of quality and design. We source premium materials from around the world and work with skilled
              artisans to create products that stand the test of time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-black" size={32} />
            </div>
            <div className="text-white font-bold text-3xl mb-2">10+</div>
            <div className="text-gray-400">Years of Excellence</div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-black" size={32} />
            </div>
            <div className="text-white font-bold text-3xl mb-2">5000+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-black" size={32} />
            </div>
            <div className="text-white font-bold text-3xl mb-2">500+</div>
            <div className="text-gray-400">Products</div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-black" size={32} />
            </div>
            <div className="text-white font-bold text-3xl mb-2">100%</div>
            <div className="text-gray-400">Quality Assured</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-800 rounded-xl p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-6">Our Commitment</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              At Luxora Hardware, quality is not just a promise—it's our foundation. We meticulously select
              materials, rigorously test our products, and continuously innovate to exceed industry standards.
              Our commitment to excellence ensures that every product bearing our name delivers unmatched
              durability, functionality, and aesthetic appeal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-amber-400 font-semibold mb-2">Premium Materials</h3>
                <p className="text-gray-400 text-sm">
                  Only the finest brass, stainless steel, and crystal materials
                </p>
              </div>
              <div>
                <h3 className="text-amber-400 font-semibold mb-2">Expert Craftsmanship</h3>
                <p className="text-gray-400 text-sm">
                  Skilled artisans bringing decades of experience
                </p>
              </div>
              <div>
                <h3 className="text-amber-400 font-semibold mb-2">Rigorous Testing</h3>
                <p className="text-gray-400 text-sm">
                  Every product undergoes comprehensive quality control
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Why Architects & Designers Choose Us</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We understand the importance of details in creating exceptional spaces. That's why professionals
            trust Luxora Hardware for their most prestigious projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-left">
              <h3 className="text-white font-semibold text-lg mb-2">Consistent Quality</h3>
              <p className="text-gray-400 text-sm">
                Reliable products that meet specifications every time
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-left">
              <h3 className="text-white font-semibold text-lg mb-2">Custom Solutions</h3>
              <p className="text-gray-400 text-sm">
                Tailored products to match unique project requirements
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-left">
              <h3 className="text-white font-semibold text-lg mb-2">Professional Support</h3>
              <p className="text-gray-400 text-sm">
                Dedicated team to assist with selection and installation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
