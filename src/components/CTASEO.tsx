import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, ExternalLink } from 'lucide-react';

const CTASEO = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <motion.h2
                className="text-3xl md:text-4xl font-display font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ready to Secure Your Crypto with a <span className="gradient-text">Trezor Hardware Wallet</span>?
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Join thousands of satisfied users who trust Trezor hardware wallets to protect their digital assets. Get started today with the most secure cryptocurrency storage solution available.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a 
                  href="https://trezor.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-dark-green text-white rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center justify-center"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Explore Trezor Models
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a 
                  href="#features" 
                  className="px-8 py-4 border-2 border-dark-green text-dark-green rounded-lg font-medium hover:bg-dark-green hover:text-white transition-all flex items-center justify-center"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
            <div className="bg-dark-green p-12 text-white">
              <motion.h3
                className="text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Why Choose a Trezor Hardware Wallet?
              </motion.h3>
              <motion.ul
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <li className="flex items-start">
                  <Shield className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <p>Military-grade security keeps your private keys completely isolated from online threats</p>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <p>Support for 1,000+ cryptocurrencies including Bitcoin, Ethereum, and all ERC-20 tokens</p>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <p>Easy backup and recovery with the seed phrase system</p>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <p>Open-source security that's continuously verified by the global developer community</p>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <p>User-friendly interface makes managing your crypto assets simple and secure</p>
                </li>
              </motion.ul>
              <motion.div
                className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-sm">
                  "The Trezor hardware wallet combines cutting-edge security with ease of use, making it the preferred choice for both crypto beginners and experts."
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASEO;