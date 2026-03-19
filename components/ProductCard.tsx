import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  material: string;
}

export default function ProductCard({
  id,
  name,
  description,
  image,
  material,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className="group bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 transform hover:-translate-y-1">
        <div className="relative h-64 overflow-hidden bg-zinc-800">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-6 space-y-3">
          <h3 className="text-white font-semibold text-lg group-hover:text-amber-400 transition-colors line-clamp-1">
            {name}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-amber-400 text-xs font-medium">{material}</span>
            <span className="text-amber-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
