import { PRODUCTS, CATEGORIES } from '../data/productsData.js';
import ProductCard from '../components/ProductCard.jsx';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fresh and <span className="text-yellow-300">Organic</span> Products
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get your groceries delivered fresh to your doorstep. Quality products at affordable prices.
          </p>
          <a
            href="#products"
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose <span className="text-orange-500">GrockMart</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-leaf text-3xl text-orange-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh & Organic</h3>
              <p className="text-gray-600">Fresh vegetables and fruits at affordable prices</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-truck text-3xl text-orange-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Free Delivery</h3>
              <p className="text-gray-600">Fast and reliable delivery to your doorstep</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-credit-card text-3xl text-orange-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Payments</h3>
              <p className="text-gray-600">Multiple payment options for your convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Shop by <span className="text-orange-500">Categories</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {CATEGORIES.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-16 w-16 object-contain mx-auto mb-3"
                />
                <h3 className="text-sm font-medium text-gray-800">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-orange-500">Products</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our <span className="text-orange-500">Customers</span> Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'John', text: 'Excellent service and fresh products!' },
              { name: 'Sarah', text: 'Fast delivery and great quality.' },
              { name: 'Mike', text: 'Love the variety of organic options.' },
              { name: 'Emma', text: 'Best grocery shopping experience!' }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user text-2xl text-orange-500"></i>
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <h4 className="font-semibold text-gray-800">{review.name}</h4>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
