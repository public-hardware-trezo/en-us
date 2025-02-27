import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface CryptoPrice {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CryptoTicker = () => {
  const [cryptoData, setCryptoData] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
              sparkline: false,
              price_change_percentage: '24h',
            },
          }
        );
        setCryptoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        setLoading(false);
      }
    };

    fetchCryptoData();
    
    // Update every 60 seconds
    const interval = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-gray-50 py-3 overflow-hidden border-b border-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center space-x-4">
            <div className="h-6 w-32 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-6 w-32 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-6 w-32 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 py-3 overflow-hidden border-b border-gray-100">
      <div className="flex whitespace-nowrap crypto-ticker">
        {cryptoData.map((crypto) => (
          <motion.div
            key={crypto.id}
            className="flex items-center mx-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-medium">{crypto.name}</span>
            <span className="ml-2 font-bold">${crypto.current_price.toLocaleString()}</span>
            <span
              className={`ml-2 text-sm ${
                crypto.price_change_percentage_24h >= 0
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {crypto.price_change_percentage_24h >= 0 ? '↑' : '↓'}
              {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </span>
          </motion.div>
        ))}
        {/* Duplicate for continuous scrolling effect */}
        {cryptoData.map((crypto) => (
          <motion.div
            key={`${crypto.id}-dup`}
            className="flex items-center mx-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-medium">{crypto.name}</span>
            <span className="ml-2 font-bold">${crypto.current_price.toLocaleString()}</span>
            <span
              className={`ml-2 text-sm ${
                crypto.price_change_percentage_24h >= 0
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {crypto.price_change_percentage_24h >= 0 ? '↑' : '↓'}
              {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;