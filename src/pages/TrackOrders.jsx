import { useStore } from '../context/StoreContext.jsx';

export default function TrackOrders() {
  const { orders, user } = useStore();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <i className="fas fa-truck text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Please Sign In</h2>
            <p className="text-gray-600 mb-6">
              You need to be signed in to view your order history.
            </p>
            <a
              href="/login"
              className="inline-block bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Preparing': return 'bg-yellow-100 text-yellow-800';
      case 'Out for Delivery': return 'bg-blue-100 text-blue-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Preparing': return 'fas fa-clock';
      case 'Out for Delivery': return 'fas fa-truck';
      case 'Delivered': return 'fas fa-check-circle';
      case 'Cancelled': return 'fas fa-times-circle';
      default: return 'fas fa-info-circle';
    }
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Track Orders</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <i className="fas fa-shopping-bag text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No Orders Yet</h2>
            <p className="text-gray-600 mb-6">
              You haven't placed any orders yet. Start shopping to see your orders here.
            </p>
            <a
              href="/"
              className="inline-block bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Start Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Track Orders</h1>
        
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Order #{order.id}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      <i className={`${getStatusIcon(order.status)} mr-1`}></i>
                      {order.status}
                    </span>
                    <p className="text-lg font-semibold text-gray-900 mt-1">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Items Ordered:</h4>
                  <div className="space-y-2">
                    {order.items.map(item => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-8 w-8 object-contain bg-gray-100 rounded"
                          />
                          <span className="text-gray-900">{item.name}</span>
                        </div>
                        <div className="text-gray-600">
                          {item.quantity} × ${item.price} = ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Payment Method:</p>
                      <p className="font-medium text-gray-900">{order.paymentMethod}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Delivery Location:</p>
                      <p className="font-medium text-gray-900">
                        {order.location.city}, {order.location.pincode}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order Progress */}
                <div className="border-t pt-4 mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Order Progress:</h4>
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center ${order.status === 'Preparing' || order.status === 'Out for Delivery' || order.status === 'Delivered' ? 'text-orange-500' : 'text-gray-300'}`}>
                      <i className="fas fa-clock mr-2"></i>
                      <span className="text-sm">Preparing</span>
                    </div>
                    <div className={`flex-1 h-1 ${order.status === 'Out for Delivery' || order.status === 'Delivered' ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                    <div className={`flex items-center ${order.status === 'Out for Delivery' || order.status === 'Delivered' ? 'text-orange-500' : 'text-gray-300'}`}>
                      <i className="fas fa-truck mr-2"></i>
                      <span className="text-sm">Out for Delivery</span>
                    </div>
                    <div className={`flex-1 h-1 ${order.status === 'Delivered' ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                    <div className={`flex items-center ${order.status === 'Delivered' ? 'text-orange-500' : 'text-gray-300'}`}>
                      <i className="fas fa-check-circle mr-2"></i>
                      <span className="text-sm">Delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
