import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Web3 Crypto Exchange Brand',
    category: 'Web3 Branding',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete brand identity for a decentralized cryptocurrency exchange platform.',
  },
  {
    id: 2,
    title: 'Restaurant Brand Identity',
    category: 'Brand Identity',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive branding package for a modern restaurant chain.',
  },
  {
    id: 3,
    title: 'NFT Collection Launch',
    category: 'Web3 Branding',
    image: 'https://images.pexels.com/photos/8369751/pexels-photo-8369751.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Visual identity and marketing materials for an exclusive NFT collection.',
  },
  {
    id: 4,
    title: 'Event Marketing Flyers',
    category: 'Flyer Design',
    image: 'https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Eye-catching promotional materials for corporate events and conferences.',
  },
  {
    id: 5,
    title: 'Social Media Campaign',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cohesive social media design system for brand consistency.',
  },
  {
    id: 6,
    title: 'Tech Startup Logo',
    category: 'Logo Design',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern logo design for an innovative technology startup.',
  },
];

const categories = ['All', 'Brand Identity', 'Web3 Branding', 'Logo Design', 'Flyer Design', 'Social Media'];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest design projects spanning brand identity, Web3 branding, and visual communications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <Eye className="text-white" size={24} />
                        <ExternalLink className="text-white" size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {selectedItem.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedItem.description}
                  </p>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};