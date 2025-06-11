# GARMENTS - Modern E-commerce Website

A sophisticated React-based e-commerce platform for clothing and fashion accessories. Built with modern web technologies and optimized for performance.

## Features

### Core E-commerce Functionality
- **Product Catalog**: Browse products by categories (Women, Men)
- **Product Details**: Detailed product pages with multiple images, descriptions, sizes, and colors
- **Shopping Cart**: Add/remove items with persistent cart state
- **Search**: Advanced search functionality with overlay interface
- **User Authentication**: Login and signup pages with form validation

### Product Categories
- Holiday Gifting
- New Arrivals  
- Best Sellers
- Clothing (Tops, Pants, Outerwear, Dresses, Suits)
- Shoes & Bags
- Sale Items

### Pages & Sections
- **Homepage**: Featured products, categories, and promotional content
- **Product Listings**: Filterable product grids for men and women
- **About**: Company information and values
- **Stores**: Store locator and information
- **Sustainability**: Environmental initiatives
- **Careers**: Job opportunities
- **Gift Cards**: Purchase digital gift cards
- **Checkout**: Secure payment processing with Stripe integration

### Technical Features
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Performance Optimized**: Lazy loading, code splitting, and image optimization
- **Modern UI**: Clean, minimalist design with smooth animations
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Error Handling**: 404 page and graceful error states

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router 6** - Client-side routing with lazy loading
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library (Feather icons)
- **Swiper** - Touch slider for product galleries

### Form Handling & Validation
- **Formik** - Form state management
- **Yup** - Schema validation

### Performance & UX
- **React Lazy Load Image** - Optimized image loading
- **React Intersection Observer** - Scroll-triggered animations
- **React Window** - Virtualized lists for large datasets

### Payment Integration
- **Stripe** - Secure payment processing

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing with Autoprefixer

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── cart/           # Shopping cart components
│   ├── filters/        # Product filtering components
│   ├── home/           # Homepage specific components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── product/        # Product display components
│   └── search/         # Search functionality
├── context/            # React Context providers
│   └── CartContext.jsx # Global cart state management
├── data/               # Static data and product catalog
│   ├── products.js     # Product data and categories
│   └── testimonials.js # Customer testimonials
├── hooks/              # Custom React hooks
│   └── useWindowSize.js # Window size tracking
├── lib/                # Utility libraries
│   └── stripe.js       # Stripe configuration
├── pages/              # Route components
│   ├── About.jsx
│   ├── BestSellers.jsx
│   ├── Careers.jsx
│   ├── Checkout.jsx
│   ├── CheckoutSuccess.jsx
│   ├── GiftCard.jsx
│   ├── HolidayGifting.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NewArrivals.jsx
│   ├── NotFound.jsx
│   ├── ProductDetail.jsx
│   ├── ProductListing.jsx
│   ├── SignUp.jsx
│   ├── Stores.jsx
│   └── Sustainability.jsx
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd modern-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Configuration

### Stripe Setup
Configure your Stripe keys in `src/lib/stripe.js` for payment processing.

### Environment Variables
Create a `.env` file for environment-specific configurations:
```
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key_here
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For support and questions, please contact the development team or create an issue in the repository.
