'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowLeft, Download } from 'lucide-react';
import productsData from '@/data/products.json';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;

  const product = productsData.products.find(p => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="bg-black min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = productsData.products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const whatsappNumber = '7718096969';
  const whatsappMessage = `Hi, I'm interested in ${product.name}`;
  const phoneNumber = '+917718096969';

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4">
            <div className="relative h-96 lg:h-[600px] bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 bg-zinc-900 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-amber-500'
                        : 'border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-amber-400 text-sm font-medium mb-2">{product.subcategory}</div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-sm font-medium">
                {product.price}
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <h2 className="text-white font-semibold text-xl mb-3">Description</h2>
              <p className="text-gray-400 leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-zinc-800 pt-6 space-y-4">
              <h2 className="text-white font-semibold text-xl mb-3">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-500 text-sm mb-1">Material</div>
                  <div className="text-white font-medium">{product.material}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-1">Size</div>
                  <div className="text-white font-medium">{product.size}</div>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-6 space-y-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-4 rounded-lg font-semibold text-center hover:from-amber-600 hover:to-amber-700 transition-all hover:shadow-lg hover:shadow-amber-500/50"
              >
                Enquire on WhatsApp
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2 w-full bg-zinc-900 border border-zinc-800 text-white px-6 py-4 rounded-lg font-semibold hover:bg-zinc-800 transition-all"
              >
                <Phone size={20} />
                Call Now
              </a>
              <button className="flex items-center justify-center gap-2 w-full bg-white/5 border border-zinc-800 text-white px-6 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                <Download size={20} />
                Download Catalog
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-white mb-4">
                Related <span className="text-amber-400">Products</span>
              </h2>
              <p className="text-gray-400">Explore similar products from our collection</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  description={relatedProduct.description}
                  image={relatedProduct.images[0]}
                  material={relatedProduct.material}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
