import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext.jsx';

export default function Header() {
  const { 
    cart, 
    cartTotal, 
    searchQuery, 
    setSearchQuery, 
    location, 
    setLocation, 
    autoDetectLocation,
    user,
    logout
  } = useStore();
  
  const [searchActive, setSearchActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
  
  const navigate = useNavigate();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cities = [
    { name: 'Delhi', pincode: '110001' },
    { name: 'Mumbai', pincode: '400001' },
    { name: 'Bangalore', pincode: '560001' },
    { name: 'Chennai', pincode: '600001' },
    { name: 'Hyderabad', pincode: '500072' },
    { name: 'Pune', pincode: '411001' },
    { name: 'Kolkata', pincode: '700001' }
  ];

  const handleCartClick = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    setCartActive(!cartActive);
  };

  const handleLocationSelect = (city, pincode) => {
    setLocation(city, pincode);
    setLocationDropdown(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">
              Grock<span className="text-orange-500">Mart</span>
            </span>
          </Link>

          {/* Location */}
          <div className="hidden md:flex items-center space-x-2 relative">
            <span className="text-gray-600">📍</span>
            <div className="relative">
              <button
                onClick={() => setLocationDropdown(!locationDropdown)}
                className="flex items-center space-x-1 text-sm text-gray-700 hover:text-orange-500"
              >
                <span>Deliver to:</span>
                <span className="font-medium">{location.city}, {location.pincode}</span>
                <span className="text-xs">▼</span>
              </button>
              
              {locationDropdown && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-2">
                    <div className="text-xs text-gray-500 mb-2 px-2">Select Location</div>
                    {cities.map(city => (
                      <button
                        key={city.name}
                        onClick={() => handleLocationSelect(city.name, city.pincode)}
                        className="w-full text-left px-2 py-2 text-sm hover:bg-gray-50 rounded"
                      >
                        {city.name}, {city.pincode}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        autoDetectLocation();
                        setLocationDropdown(false);
                      }}
                      className="w-full text-left px-2 py-2 text-sm hover:bg-gray-50 rounded text-orange-500"
                    >
                      📍 Auto-detect
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-lg mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Search fruits, snacks, milk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button
              onClick={handleCartClick}
              className="relative flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-orange-500"
            >
              <i className="fas fa-shopping-cart text-xl"></i>
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Account */}
            <div className="relative">
              {user ? (
                <button
                  onClick={() => setAccountDropdown(!accountDropdown)}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-orange-500"
                >
                  <i className="fas fa-user text-xl"></i>
                  <span className="hidden sm:inline">{user.name}</span>
                  <span className="text-xs">▼</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-orange-500"
                >
                  <i className="fas fa-user text-xl"></i>
                  <span className="hidden sm:inline">Sign In</span>
                </Link>
              )}

              {accountDropdown && user && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    <Link
                      to="/track-orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setAccountDropdown(false)}
                    >
                      📋 My Orders
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setAccountDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      🚪 Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuActive(!menuActive)}
              className="md:hidden p-2 text-gray-700 hover:text-orange-500"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuActive && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="px-3 py-2 text-gray-700 hover:text-orange-500">Home</Link>
              <Link to="/track-orders" className="px-3 py-2 text-gray-700 hover:text-orange-500">Track Orders</Link>
              {user && (
                <button
                  onClick={() => {
                    logout();
                    setMenuActive(false);
                  }}
                  className="px-3 py-2 text-left text-gray-700 hover:text-orange-500"
                >
                  Logout
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}