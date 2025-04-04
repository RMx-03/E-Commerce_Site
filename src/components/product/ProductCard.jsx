import { memo } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = memo(({ product }) => {    
    const productImage = Array.isArray(product.image) && product.image.length > 0 
      ? product.image[0] 
      : 'fallback-image.jpg';

    return (
      <Link to={`/product/${product.id}`} className="group product-card animate-fade-in">
        <div className="product-card-image">
          <LazyLoadImage
            src={productImage}
            alt={product.name || 'Product Image'}
            className="group-hover:opacity-75"
          />
          {product.discount && (
            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs">
              {product.discount}
            </div>
          )}
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-sm text-gray-900">{product.name}</h3>
          <div className="flex items-center">
            <p className="text-sm font-medium text-gray-900">${product.price}</p>
            {product.originalPrice && (
              <p className="ml-2 text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </p>
            )}
          </div>
          <div className="flex gap-1">
            {product.colors?.map((color) => (
              <div
                key={color}
                className="h-4 w-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
          </div>
        </div>
      </Link>
    );
  });
  
  export default ProductCard;