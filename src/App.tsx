import React from 'react';
import { Helmet } from 'react-helmet-async';
import CryptoTicker from './components/CryptoTicker';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ContentSection from './components/ContentSection';
import ComparisonSection from './components/ComparisonSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASEO from './components/CTASEO';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Trezor Hardware Wallet | Ultimate Security Guide 2025</title>
        <meta name="description" content="Discover the ultimate guide to Trezor hardware wallets. Learn about security features, setup process, and why Trezor is the leading choice for cryptocurrency storage." />
        <meta name="keywords" content="hardware wallet trezor, trezor wallet, cryptocurrency security, bitcoin hardware wallet, crypto storage" />
        <meta property="og:title" content="Trezor Hardware Wallet | Ultimate Security Guide 2025" />
        <meta property="og:description" content="Discover the ultimate guide to Trezor hardware wallets. Learn about security features, setup process, and why Trezor is the leading choice for cryptocurrency storage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trezor-hardware-wallet-guide.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trezor Hardware Wallet | Ultimate Security Guide 2025" />
        <meta name="twitter:description" content="Discover the ultimate guide to Trezor hardware wallets. Learn about security features, setup process, and why Trezor is the leading choice for cryptocurrency storage." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <link rel="canonical" href="https://trezor-hardware-wallet-guide.com" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <CryptoTicker />
        <HeroSection />
        <FeaturesSection />
        <ContentSection />
        <ComparisonSection />
        <TestimonialsSection />
        <CTASEO />
        <Footer />
      </div>
    </>
  );
}

export default App;