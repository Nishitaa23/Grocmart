# GrockMart - React Grocery Website 🛒

A modern, responsive grocery shopping website built with React, featuring Blinkit-like quick commerce functionality.

## 📁 Project Structure

```
E:\quick\Grocery-Project-Using-HTML-CSS-JAVASCRIPT\
├── Original-HTML-Backup\          # Original HTML/CSS/JS version (backup)
│   └── Grocy project\
│       ├── index.html
│       ├── css/
│       ├── js/
│       └── image/
├── src\                           # React application
│   ├── components/
│   │   ├── Header.jsx            # Enhanced navbar with auth
│   │   ├── ProductCard.jsx      # Product cards with +/- controls
│   │   └── Footer.jsx           # Footer component
│   ├── pages/
│   │   ├── Home.jsx             # Main homepage
│   │   ├── Cart.jsx             # Shopping cart page
│   │   ├── Login.jsx            # Sign in page
│   │   ├── Signup.jsx           # Sign up page
│   │   ├── Payment.jsx          # Payment details page
│   │   └── TrackOrders.jsx      # Order tracking page
│   ├── context/
│   │   └── StoreContext.jsx     # State management
│   ├── data/
│   │   └── productsData.js      # Products & categories data
│   ├── styles/
│   │   └── globals.css          # Tailwind-like utilities
│   ├── App.jsx                  # Main app with routing
│   └── main.jsx                 # Entry point
├── public/
│   └── image/                   # All product images
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## ✨ Features

### 🛒 **Enhanced Shopping Experience**
- **Smart Product Cards**: "Add" button transforms to +/- quantity controls
- **Real-time Cart Updates**: Instant cart count and item management
- **Multiple Quantities**: Add n number of items with visual feedback

### 🔐 **Complete Authentication System**
- **Sign In/Sign Up**: Email/password authentication
- **Session Management**: User state persists across browser sessions
- **Protected Routes**: Cart redirects to login if not authenticated

### 💳 **Payment & Order Management**
- **Payment Page**: Multiple payment methods (Card, UPI, COD)
- **Order Creation**: Complete order processing with cart clearing
- **Order Tracking**: Real-time order status (Preparing → Out for Delivery → Delivered)

### 📍 **Location Services**
- **Auto-detect Location**: Browser geolocation API integration
- **Manual Selection**: Dropdown with major Indian cities
- **Location Persistence**: Saves user's preferred delivery location

### 📱 **Responsive Design**
- **Mobile-first**: Optimized for all screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Touch-friendly**: Easy navigation on mobile devices

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   - VS Code will show localhost URL
   - Or visit `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 🎯 Key Features to Test

1. **Product Cards**: Click "Add" → See +/- controls → Real-time updates
2. **Authentication**: Sign up → Sign in → User state persists
3. **Cart Flow**: Add items → View cart → Login redirect → Payment → Order
4. **Location**: Auto-detect or manual selection → Persists across sessions
5. **Orders**: Track order status → View order history → Progress indicators

## 🛠️ Technologies Used

- **React 18** - UI library with hooks
- **React Router** - Client-side routing
- **Context API** - State management
- **Vite** - Fast build tool
- **CSS3** - Modern styling with animations
- **Font Awesome** - Icons
- **LocalStorage** - Data persistence

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Migration Notes

- **Original HTML version** is safely backed up in `Original-HTML-Backup/`
- **All images** have been moved to `public/image/`
- **React version** maintains all original functionality plus new features
- **No backend required** - all data is simulated in frontend

## 🚀 Deployment

### Static Hosting (Recommended)
```bash
npm run build
# Upload 'dist' folder to:
# - Netlify (drag & drop)
# - Vercel (connect repo)
# - GitHub Pages
# - Any static host
```

### Environment Variables
For production, add:
```env
VITE_API_URL=your_backend_url
VITE_PAYMENT_GATEWAY=your_payment_gateway
```

## 📞 Support

- **Issues**: Check the original HTML backup for reference
- **Features**: All Blinkit-like functionality is implemented
- **Responsive**: Tested on mobile, tablet, and desktop

---

**Built with ❤️ using React** | **Original HTML version preserved as backup** 🛡️