import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Crypto Investor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    stars: 5,
    text: "My Trezor hardware wallet has been a game-changer for my peace of mind. After losing funds in an exchange hack, I knew I needed a more secure solution. The setup was straightforward, and now I sleep better knowing my crypto is truly secure."
  },
  {
    name: "Sarah Johnson",
    role: "Blockchain Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    stars: 5,
    text: "As someone who works in blockchain development, I understand the importance of proper security. The Trezor hardware wallet is the gold standard. The open-source approach means I can verify the security myself, which is crucial for trust."
  },
  {
    name: "David Chen",
    role: "Long-term Bitcoin Holder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    stars: 5,
    text: "I've been using my Trezor hardware wallet for over 4 years now. It's survived multiple moves, a computer upgrade, and even a brief dip in water (don't ask!). Through it all, my crypto has remained secure, and recovery was simple when needed."
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    stars: 4,
    text: "I recommend Trezor hardware wallets to all my clients who are investing in cryptocurrency. The security is unmatched, and the interface is simple enough that even my less tech-savvy clients can use it confidently."
  },
  {
    name: "James Wilson",
    role: "Crypto Enthusiast",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    stars: 5,
    text: "After researching all the hardware wallet options, I chose Trezor for its security track record and ease of use. The ability to recover my wallet with the seed phrase gives me confidence that my assets are safe for the long term."
  }
];

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveIndex(swiper.activeIndex);
      });
    }
  }, [swiper]);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            What Users Say About <span className="gradient-text">Trezor Hardware Wallet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of cryptocurrency users trust Trezor to secure their digital assets. Here's what some of them have to say.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="testimonial-slider"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              onSwiper={setSwiper}
              className="pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-50 p-8 rounded-xl shadow-md h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 flex-grow">{testimonial.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => swiper?.slidePrev()} 
              className="p-2 rounded-full bg-dark-green text-white hover:bg-opacity-90 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={() => swiper?.slideNext()} 
              className="p-2 rounded-full bg-dark-green text-white hover:bg-opacity-90 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;