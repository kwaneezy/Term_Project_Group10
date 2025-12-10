# PhoneHub - E-Commerce Smartphone Store

A comprehensive e-commerce website for selling smartphones (iPhones, Samsung, Google Pixel, etc.) with full shopping cart functionality, user authentication, and mock payment system.

## Features

- **Product Catalog**: 24+ smartphones with detailed specifications
- **Shopping Cart**: Add/remove items, update quantities, persistent cart storage
- **User Authentication**: Login/registration with localStorage persistence
- **User Profiles**: View and edit user information
- **Product Details**: Detailed product pages with color and storage variants
- **Search & Filter**: Search products and filter by brand, price range, and storage
- **Checkout Flow**: Complete mock checkout with payment processing
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Additional Pages**: About, FAQ sections

## Tech Stack

- **React 18** with TypeScript
- **React Router** for navigation
- **Context API** for state management
- **Tailwind CSS 4.0** for styling
- **Shadcn UI** components
- **Vite** for build tooling
- **LocalStorage** for data persistence

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically in your browser at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
/
├── components/          # Reusable React components
│   ├── ui/             # Shadcn UI components
│   └── Navbar.tsx      # Main navigation component
├── contexts/           # React Context providers
│   ├── AuthContext.tsx # Authentication state management
│   └── CartContext.tsx # Shopping cart state management
├── pages/              # Page components
│   ├── Home.tsx        # Homepage with product listing
│   ├── ProductDetail.tsx # Individual product page
│   ├── Cart.tsx        # Shopping cart page
│   ├── Checkout.tsx    # Checkout flow
│   ├── Login.tsx       # Login page
│   ├── Register.tsx    # Registration page
│   ├── Profile.tsx     # User profile page
│   ├── About.tsx       # About page
│   └── FAQ.tsx         # FAQ page
├── data/               # Mock data
│   └── products.ts     # Product catalog
├── styles/             # Global styles
│   └── globals.css     # Tailwind and global CSS
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
└── index.html          # HTML template
```

## Features in Detail

### Product Catalog
- 24+ smartphones from major brands (Apple, Samsung, Google, OnePlus, Xiaomi)
- Multiple storage options and colors for each device
- High-quality product images
- Detailed specifications and descriptions

### Shopping Cart
- Add products with specific variants (color/storage)
- Update quantities
- Remove items
- Persistent cart using localStorage
- Real-time price calculations

### User Authentication
- Registration with email and password
- Login functionality
- Persistent sessions using localStorage
- Protected routes for authenticated users

### Checkout Process
- Order summary with itemized pricing
- Shipping information form
- Mock payment processing
- Order confirmation

### Search & Filters
- Real-time search across product names
- Filter by brand
- Filter by price range
- Filter by storage capacity
- Sort by price (low to high, high to low)

## Data Persistence

All data is stored in localStorage:
- **Cart items**: Persists across browser sessions
- **User authentication**: Login state and user profile
- **User preferences**: Saved filters and settings

## Mock Data

The application uses mock data for:
- Product catalog (24+ smartphones)
- User authentication (no real backend)
- Payment processing (simulated only)

**Note**: This is a frontend-only demonstration. No real transactions or user data storage occurs.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes.
