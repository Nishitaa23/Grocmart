import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext.jsx';

export default function Cart() {
  const { cart, cartTotal, removeFromCart, updateCartQuantity, user } = useStore();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Please Sign In</h2>
            <p className="text-gray-600 mb-6">
              You need to be signed in to view your cart and place orders.
            </p>
            <div className="space-y-3">
              <Link
                to="/login"
                className="block w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-6">
              Add some items to your cart to get started with your order.
            </p>
            <Link
              to="/"
              className="inline-block bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            {cart.map(item => (
              <div key={item.id} className="p-6 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 object-contain bg-gray-100 rounded-lg"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price} each</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateCartQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateCartQuantity(item.id, 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
                
                <div className="text-right">
                  <p className="text-lg font-medium text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium text-gray-900">
                  Total ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)
                </p>
                <p className="text-sm text-gray-500">Delivery charges may apply</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">${cartTotal.toFixed(2)}</p>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <Link
                to="/"
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors text-center"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => navigate('/payment')}
                className="flex-1 bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
