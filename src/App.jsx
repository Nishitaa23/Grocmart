import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext.jsx';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Payment from './pages/Payment.jsx';
import TrackOrders from './pages/TrackOrders.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/track-orders" element={<TrackOrders />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </StoreProvider>
  );
}