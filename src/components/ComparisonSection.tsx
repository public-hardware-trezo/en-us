import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const comparisonData = [
    {
      feature: "Offline Storage",
      trezor: true,
      software: false,
      exchange: false,
    },
    {
      feature: "Physical Security Element",
      trezor: true,
      software: false,
      exchange: false,
    },
    {
      feature: "Immune to Computer Viruses",
      trezor: true,
      software: false,
      exchange: false,
    },
    {
      feature: "Full Asset Control",
      trezor: true,
      software: true,
      exchange: false,
    },
    {
      feature: "Recovery Backup",
      trezor: true,
      software: true,
      exchange: false,
    },
    {
      feature: "Open-Source Security",
      trezor: true,
      software: "Varies",
      exchange: false,
    },
    {
      feature: "Protection from Exchange Hacks",
      trezor: true,
      software: true,
      exchange: false,
    },
    {
      feature: "Multi-Currency Support",
      trezor: true,
      software: true,
      exchange: true,
    },
  ];

  return (
    <section id="comparison" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            Why <span className="gradient-text">Trezor Hardware Wallet</span> Outperforms Alternatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how the Trezor hardware wallet compares to software wallets and exchange storage options for securing your cryptocurrency assets.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.table
            className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <thead>
              <tr className="bg-dark-green text-white">
                <th className="py-4 px-6 text-left">Security Feature</th>
                <th className="py-4 px-6 text-center">Trezor Hardware Wallet</th>
                <th className="py-4 px-6 text-center">Software Wallet</th>
                <th className="py-4 px-6 text-center">Exchange Storage</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="py-4 px-6 border-t">{row.feature}</td>
                  <td className="py-4 px-6 text-center border-t">
                    {row.trezor === true ? (
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    ) : row.trezor === false ? (
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    ) : (
                      row.trezor
                    )}
                  </td>
                  <td className="py-4 px-6 text-center border-t">
                    {row.software === true ? (
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    ) : row.software === false ? (
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    ) : (
                      row.software
                    )}
                  </td>
                  <td className="py-4 px-6 text-center border-t">
                    {row.exchange === true ? (
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    ) : row.exchange === false ? (
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    ) : (
                      row.exchange
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            The <span className="font-bold text-dark-green">Trezor hardware wallet</span> provides unmatched security for your cryptocurrency assets, combining offline storage with user-friendly management tools.
          </p>
          <a 
            href="#testimonials" 
            className="px-8 py-4 bg-dark-green text-white rounded-lg font-medium hover:bg-opacity-90 transition-all inline-block"
          >
            See What Users Say
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;