import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Grock<span className="text-orange-500">Mart</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Fresh and organic products delivered to your doorstep. Shop with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                +91 8853455765
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                +91 9140026484
              </p>
              <p className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                grocerymart12@gmail.com
              </p>
              <p className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Greater Noida, India - 201306
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link to="/track-orders" className="block text-gray-300 hover:text-orange-500 transition-colors">
                Track Orders
              </Link>
              <a href="#products" className="block text-gray-300 hover:text-orange-500 transition-colors">
                Products
              </a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors">
                About Us
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe for latest updates</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="mt-4">
              <img src="/image/payment.png" alt="Payment methods" className="h-8" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GrockMart Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}