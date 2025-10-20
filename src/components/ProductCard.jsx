import { useState } from 'react';
import { useStore } from '../context/StoreContext.jsx';

export default function ProductCard({ product }) {
  const { addToCart, updateCartQuantity, cart } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const cartItem = cart.find(item => item.id === product.id);
  const currentQuantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(product.id, product.name, product.price, product.image, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, Math.min(99, quantity + change));
    setQuantity(newQuantity);
  };

  const handleCartQuantityChange = (change) => {
    updateCartQuantity(product.id, change);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-orange-500">${product.price}</span>
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star text-sm"></i>
            ))}
          </div>
        </div>

        {currentQuantity === 0 ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Quantity:</span>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-3 py-1 border-x">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            
            <button
              onClick={handleAddToCart}
              className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                isAdded 
                  ? 'bg-green-500 text-white' 
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
            >
              {isAdded ? '✓ Added!' : 'Add to Cart'}
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="text-center text-sm text-gray-600">
              In Cart: {currentQuantity} item{currentQuantity > 1 ? 's' : ''}
            </div>
            
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => handleCartQuantityChange(-1)}
                className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center"
              >
                -
              </button>
              <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg font-medium">
                {currentQuantity}
              </span>
              <button
                onClick={() => handleCartQuantityChange(1)}
                className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
