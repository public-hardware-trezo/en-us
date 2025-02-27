import { motion } from 'framer-motion';
import { Shield, Lock, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Secure Your <span className="gradient-text">Crypto Future</span> with Trezor
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The most trusted <span className="font-bold text-dark-green">hardware wallet Trezor</span> for cryptocurrency storage. Military-grade security meets elegant design.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#features" 
                className="px-8 py-4 bg-dark-green text-white rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center justify-center"
              >
                <Shield className="mr-2 h-5 w-5" />
                Explore Features
              </a>
              <a 
                href="#comparison" 
                className="px-8 py-4 border-2 border-dark-green text-dark-green rounded-lg font-medium hover:bg-dark-green hover:text-white transition-all flex items-center justify-center"
              >
                <Lock className="mr-2 h-5 w-5" />
                Why Trezor?
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              <motion.img 
                src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Trezor Hardware Wallet" 
                className="rounded-xl shadow-2xl max-w-full h-auto animate-float glow"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <p className="text-dark-green font-bold">10,000+ 5-Star Reviews</p>
              </motion.div>
              <motion.div 
                className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <p className="text-dark-green font-bold">Military-Grade Security</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <a href="#content" className="flex flex-col items-center text-dark-green">
            <span className="mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;