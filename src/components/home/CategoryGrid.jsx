import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'SHIRTS',
    href: '/category/shirts',
    image: '/images/products/nimble-made-7RIMS-NMsbc-unsplash1-ezgif.com-optiwebp.webp',
  },
  {
    name: 'DENIM',
    href: '/category/denim',
    image: '/images/products/mnz-m1m2EZOZVwA-unsplash.webp',
  },
  {
    name: 'TEES',
    href: '/category/tees',
    image: '/images/products/tuananh-blue-imZPE5DJLKo-unsplash.webp',
  },
  {
    name: 'PANTS',
    href: '/category/pants',
    image: '/images/products/pexels-pixabay-52518.webp',
  },
  {
    name: 'SWEATERS',
    href: '/category/sweaters',
    image: '/images/products/pexels-nati-87264186-14641437.webp',
  },
  {
    name: 'OUTERWEAR',
    href: '/category/outerwear',
    image: '/images/products/pexels-ahmet-arslan-1056407638-28773966-optimized.webp',
  },
];

const CategoryGrid = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Shop by Category</h2>
      <div className="flex flex-wrap justify-between gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.href}
            className="group flex-1 min-w-[150px] max-w-[calc(100%/3-1rem)] sm:max-w-[calc(100%/3-1rem)]"
          >
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 shadow-sm transition duration-300 hover:shadow-md">
              <img
                src={category.image}
                alt={category.name}
                loading="eager"
                className="h-64 w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700 text-center group-hover:text-black transition-colors duration-300">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
