# Tickets E-Wallet Platform

A modern, comprehensive digital payment and ticketing platform designed for Syria and the MENA region. Built with React, TypeScript, and Supabase for scalable, secure, and user-friendly financial transactions.

## 🚀 Features

### Core Functionality
- **Multi-Role Authentication System**: Supports passengers, drivers, merchants, event admins, and system admins
- **Digital Wallet Management**: Real-time balance tracking, multiple recharge methods, transaction history
- **QR Code Payment System**: Instant payments for transportation and merchant services
- **Event Ticketing Platform**: Complete event management and digital ticket sales
- **Professional UI/UX**: Modern dark theme with glass morphism and smooth animations

### User Roles

#### 👥 Passengers
- Digital wallet with multiple recharge options (MTN Cash, Syriatel Cash, ShamCash, Fatora)
- QR code scanning for instant payments
- Event ticket purchasing and management
- Transaction history and spending analytics
- Multi-language support (Arabic/English)

#### 🚗 Drivers
- QR code generation for fare collection
- Comprehensive earnings dashboard
- Trip management and analytics
- Real-time payment notifications
- Route performance tracking

#### 🏬 Merchants
- Payment QR code generation
- Business analytics and sales tracking
- Customer engagement insights
- Financial reporting and settlement
- Inventory correlation tools

#### 🎪 Event Administrators
- Complete event lifecycle management
- Ticket sales and distribution control
- Real-time analytics and reporting
- Attendee verification system
- Revenue optimization tools

#### 👨‍💼 System Administrators
- Platform-wide monitoring and analytics
- User management and verification
- Dispute resolution system
- Financial oversight and compliance
- System health monitoring

## 🛠 Technology Stack

### Frontend
- **React 19** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **TailwindCSS V4** for modern styling
- **ShadCN UI** for consistent component library
- **Framer Motion** for smooth animations
- **React Router** for navigation
- **Lucide React** for modern icons

### Backend & Infrastructure
- **Supabase** for database, authentication, and real-time updates
- **PostgreSQL** with Row-Level Security (RLS)
- **Supabase Auth** with OTP verification
- **Real-time subscriptions** for live data updates
- **Supabase Storage** for file management

### Security Features
- Multi-factor authentication (email and SMS)
- End-to-end encryption for sensitive data
- Row-Level Security policies
- JWT token management with refresh
- Comprehensive audit logging
- Fraud prevention mechanisms

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- Bun (recommended) or npm/yarn
- Supabase account and project

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tickets-ewallet
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Database Setup**
   Run the SQL setup file in your Supabase SQL editor:
   ```bash
   # Execute SUPABASE_SETUP_REQUIRED.sql in Supabase dashboard
   ```

5. **Start Development Server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

6. **Build for Production**
   ```bash
   bun run build
   # or
   npm run build
   ```

## 🗄 Database Schema

### Core Tables
- **profiles**: User information and metadata
- **wallets**: Digital wallet balances and settings
- **transactions**: All financial transactions
- **qr_codes**: Payment QR code management
- **events**: Event information and management
- **user_tickets**: Ticket ownership and status
- **driver_profiles**: Driver-specific information
- **business_profiles**: Merchant business details

### Security Policies
- Row-Level Security (RLS) enabled on all tables
- User-specific data access controls
- Role-based permissions system
- Audit trail for all sensitive operations

## 🔐 Authentication Flow

### User Registration
1. Email and password registration
2. Email verification via OTP
3. Profile completion
4. Role assignment (passenger/driver/merchant/event_admin)
5. Wallet creation

### Login Process
1. Email/password authentication
2. Optional OTP verification for enhanced security
3. JWT token generation
4. Role-based dashboard redirect

### Password Reset
1. Email-based reset request
2. OTP verification
3. Secure password update
4. Automatic re-authentication

## 💳 Payment Integration

### Supported Payment Methods
- **MTN Cash**: Syrian mobile payment system
- **Syriatel Cash**: Telecom-based payments
- **ShamCash**: Local digital wallet
- **Fatora**: Payment gateway integration
- **Credit Cards**: Via Stripe (planned)

### Transaction Types
- **Recharge**: Wallet top-up from external sources
- **Payment**: QR-based payments to drivers/merchants
- **Transfer**: User-to-user transfers
- **Refund**: Transaction reversals
- **Withdrawal**: Cash-out to external accounts

## 🎨 Design System

### Color Palette
- **Primary**: Blue to purple gradients
- **Background**: Dark slate with purple accents
- **Cards**: Glass morphism with backdrop blur
- **Text**: High contrast white/gray hierarchy
- **Accents**: Success (green), Warning (yellow), Error (red)

### Animation Principles
- **Entrance**: Fade in with slight upward motion
- **Hover**: Subtle scale and glow effects
- **Loading**: Smooth spinner and skeleton states
- **Transitions**: Page transitions with AnimatePresence
- **Micro-interactions**: Button taps and form interactions

## 🧪 Testing

### Build Testing
```bash
# Compile and build the application
bun run build

# Start preview server
bun run preview
```

### Code Quality
```bash
# Run ESLint
bun run lint

# Type checking
npx tsc --noEmit
```

## 🚀 Deployment

### Production Build
1. **Environment Variables**: Update `.env` with production values
2. **Build Application**: `bun run build`
3. **Deploy Static Files**: Upload `dist/` folder to hosting service
4. **Database Migration**: Run production SQL scripts
5. **SSL Certificate**: Ensure HTTPS is enabled
6. **Performance Monitoring**: Set up error tracking and analytics

### Recommended Hosting
- **Vercel**: Optimal for React applications
- **Netlify**: Great for static site deployment
- **AWS S3 + CloudFront**: Enterprise-grade hosting
- **Digital Ocean**: VPS deployment option

## 📊 Performance Optimization

### Bundle Size Optimization
- **Code Splitting**: Dynamic imports for large components
- **Tree Shaking**: Unused code elimination
- **Compression**: Gzip/Brotli compression enabled
- **CDN**: Static asset delivery optimization

### Runtime Performance
- **React 19**: Latest optimizations and concurrent features
- **Vite**: Fast HMR and optimized bundling
- **Lazy Loading**: Route-based code splitting
- **Memoization**: Optimized re-renders with React.memo

## 🔧 Configuration

### Environment Variables
```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key

# Application Settings
VITE_APP_ENV=development|production
VITE_DEBUG_MODE=true|false

# Payment Gateway Configuration
VITE_FATORA_API_KEY=your_fatora_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
```

### Build Configuration
- **Vite Config**: Optimized for React and TypeScript
- **TailwindCSS**: V4 configuration with custom design tokens
- **ESLint**: React and TypeScript best practices
- **TypeScript**: Strict mode with path mapping

## 📱 Mobile Responsiveness

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

### Touch Optimization
- Minimum 44px touch targets
- Swipe gestures for navigation
- Optimized form inputs for mobile
- Full-screen modal experiences

## 🌐 Internationalization

### Supported Languages
- **English**: Primary language
- **Arabic**: Full RTL support
- **Kurdish**: Planned for future release

### Implementation
- React Context for language management
- RTL layout support with directional CSS
- Number and currency localization
- Date formatting for different locales

## 🔍 Monitoring & Analytics

### Application Monitoring
- Real-time error tracking
- Performance metrics collection
- User behavior analytics
- Database query optimization

### Business Metrics
- Transaction volume and value
- User acquisition and retention
- Revenue tracking and forecasting
- Geographic usage patterns

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Standards
- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write descriptive commit messages
- Include tests for new features
- Update documentation as needed

## 📞 Support

### Technical Support
- **Documentation**: Comprehensive API and component docs
- **Issue Tracking**: GitHub Issues for bug reports
- **Community**: Discord/Slack for real-time support
- **Email**: Technical support via email

### Business Inquiries
- **Partnerships**: Business development opportunities
- **Investment**: Investor relations and funding
- **Enterprise**: Large-scale deployment support

## 📄 License

This project is proprietary software. All rights reserved.

## 🙏 Acknowledgments

- **Supabase**: For providing excellent backend infrastructure
- **React Team**: For the amazing framework and ecosystem
- **TailwindCSS**: For the utility-first CSS framework
- **Open Source Community**: For the countless libraries and tools

---

**Built with ❤️ for the Syrian market and MENA region**

*Last updated: January 2025*