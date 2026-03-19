import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function CategoryCard({
  id,
  name,
  description,
  image,
}: CategoryCardProps) {
  return (
    <Link href={`/products?category=${id}`}>
      <div className="group relative h-80 rounded-xl overflow-hidden border border-zinc-800 hover:border-amber-500 transition-all duration-300">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
          <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-amber-400 transition-colors">
            {name}
          </h3>
          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
          <div className="mt-4 flex items-center text-amber-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore <span className="ml-2">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
