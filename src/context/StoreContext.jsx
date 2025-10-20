import { createContext, useContext, useState, useEffect } from 'react';

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocationState] = useState({ city: 'Hyderabad', pincode: '500072' });
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('grockmart_cart');
    const savedLocation = localStorage.getItem('grockmart_location');
    const savedUser = localStorage.getItem('grockmart_user');
    const savedOrders = localStorage.getItem('grockmart_orders');
    
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedLocation) setLocationState(JSON.parse(savedLocation));
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedOrders) setOrders(JSON.parse(savedOrders));
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('grockmart_cart', JSON.stringify(cart));
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCartTotal(total);
  }, [cart]);

  // Save other data to localStorage
  useEffect(() => {
    localStorage.setItem('grockmart_location', JSON.stringify(location));
  }, [location]);

  useEffect(() => {
    localStorage.setItem('grockmart_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('grockmart_orders', JSON.stringify(orders));
  }, [orders]);

  // Authentication functions
  const login = (email, password) => {
    // Mock authentication - in real app, call API
    const mockUser = { id: 1, email, name: email.split('@')[0] };
    setUser(mockUser);
    showNotification('Login successful!');
    return true;
  };

  const signup = (email, password, name) => {
    // Mock signup - in real app, call API
    const mockUser = { id: Date.now(), email, name };
    setUser(mockUser);
    showNotification('Account created successfully!');
    return true;
  };

  const logout = () => {
    setUser(null);
    showNotification('Logged out successfully!');
  };

  // Cart functions
  const addToCart = (productId, productName, price, imageSrc, quantity = 1) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === productId);
      if (existing) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { id: productId, name: productName, price, image: imageSrc, quantity }];
    });
    showNotification(`${productName} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    showNotification('Item removed from cart!');
  };

  const updateCartQuantity = (productId, change) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === productId) {
          const newQty = item.quantity + change;
          return newQty <= 0 ? null : { ...item, quantity: newQty };
        }
        return item;
      }).filter(Boolean)
    );
  };

  const setCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    showNotification('Cart cleared!');
  };

  // Order functions
  const createOrder = (paymentMethod = 'Card') => {
    if (cart.length === 0) return false;
    
    const order = {
      id: Date.now(),
      items: [...cart],
      total: cartTotal,
      status: 'Preparing',
      paymentMethod,
      date: new Date().toISOString(),
      location: location
    };
    
    setOrders(prev => [order, ...prev]);
    clearCart();
    showNotification('Order placed successfully!');
    return order;
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  // Location functions
  const setLocation = (city, pincode) => {
    setLocationState({ city, pincode });
    showNotification(`Location updated to ${city}, ${pincode}`);
  };

  const autoDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const cities = [
            { name: 'Delhi', pincode: '110001', lat: 28.6139, lon: 77.2090 },
            { name: 'Mumbai', pincode: '400001', lat: 19.0760, lon: 72.8777 },
            { name: 'Bangalore', pincode: '560001', lat: 12.9716, lon: 77.5946 },
            { name: 'Chennai', pincode: '600001', lat: 13.0827, lon: 80.2707 },
            { name: 'Hyderabad', pincode: '500072', lat: 17.3850, lon: 78.4867 },
            { name: 'Pune', pincode: '411001', lat: 18.5204, lon: 73.8567 },
            { name: 'Kolkata', pincode: '700001', lat: 22.5726, lon: 88.3639 }
          ];
          
          // Simple random selection for demo - in real app use proper geocoding
          const nearest = cities[Math.floor(Math.random() * cities.length)];
          setLocation(nearest.name, nearest.pincode);
        },
        () => showNotification('Unable to detect location. Please select manually.')
      );
    } else {
      showNotification('Geolocation not supported. Please select manually.');
    }
  };

  const showNotification = (message) => {
    const notif = document.createElement('div');
    notif.textContent = message;
    notif.style.cssText = `
      position: fixed; top: 100px; right: 20px; background: #ff7800; color: white;
      padding: 1rem 2rem; border-radius: 0.5rem; z-index: 10000; font-size: 1.4rem;
      box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
    `;
    document.body.appendChild(notif);
    setTimeout(() => document.body.removeChild(notif), 3000);
  };

  const value = {
    // User state
    user,
    login,
    signup,
    logout,
    
    // Cart state
    cart,
    cartTotal,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    setCartQuantity,
    clearCart,
    
    // Orders
    orders,
    createOrder,
    updateOrderStatus,
    
    // Search & Location
    searchQuery,
    setSearchQuery,
    location,
    setLocation,
    autoDetectLocation
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  return useContext(StoreContext);
}