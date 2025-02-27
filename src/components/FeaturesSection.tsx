import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Fingerprint, Wallet, RefreshCw, Zap } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-dark-green" />,
    title: "Military-Grade Security",
    description: "The Trezor hardware wallet utilizes advanced cryptographic security with a secure element chip that keeps your private keys isolated from online threats."
  },
  {
    icon: <Lock className="h-8 w-8 text-dark-green" />,
    title: "Offline Storage",
    description: "Your cryptocurrency never leaves the secure environment of your Trezor hardware wallet, keeping it completely safe from online attacks."
  },
  {
    icon: <Fingerprint className="h-8 w-8 text-dark-green" />,
    title: "PIN Protection",
    description: "Multiple layers of PIN protection with an innovative PIN entry system that prevents keyloggers from capturing your security code."
  },
  {
    icon: <Wallet className="h-8 w-8 text-dark-green" />,
    title: "Multi-Currency Support",
    description: "Store and manage over 1,000 cryptocurrencies including Bitcoin, Ethereum, and all ERC-20 tokens in one secure Trezor hardware wallet."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-dark-green" />,
    title: "Recovery Seed Backup",
    description: "Your Trezor hardware wallet comes with a recovery seed that allows you to restore all your assets even if your device is lost or damaged."
  },
  {
    icon: <Zap className="h-8 w-8 text-dark-green" />,
    title: "User-Friendly Interface",
    description: "The intuitive Trezor Suite software makes managing your crypto assets simple and secure, even for beginners."
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-8 rounded-xl shadow-lg card-hover"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            Why Choose <span className="gradient-text">Trezor Hardware Wallet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Trezor hardware wallet combines cutting-edge security with ease of use, making it the preferred choice for both crypto beginners and experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;