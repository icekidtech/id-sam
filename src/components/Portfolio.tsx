import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

const portfolioItems = [
    {
        id: 1,
        title: 'Full branding designs for VoxCard',
        category: 'Brand Identity',
        image: '/images/projects/voxcard.jpg',
        description:
            'Complete brand identity package for VoxCard including logo design, color systems, typography, and comprehensive brand guidelines.',
        driveLink:
            'https://drive.google.com/drive/folders/14ThZ8BPlQryqTCtve2vdqBD6wVojTKGH',
    },
    {
        id: 2,
        title: 'Full branding designs for Beautiful Discoveries',
        category: 'Brand Identity',
        image: '/images/projects/branding.jpg',
        description:
            'Comprehensive branding package for Beautiful Discoveries featuring elegant design elements and cohesive visual identity.',
        driveLink:
            'https://drive.google.com/drive/folders/1B9k-xvNp9-9BQf42LudD9ZBVxgkTuR45',
    },
    {
        id: 3,
        title: 'Flyer designs done for church events',
        category: 'Flyer Design',
        image: '/images/projects/church-flyer.jpeg',
        description:
            'Creative and inspiring flyer designs for various church events, services, and community gatherings.',
        driveLink:
            'https://drive.google.com/drive/folders/14T8gmHjuOR7A-ueKkQc1ecJDn_tDT0MB',
    },
    {
        id: 4,
        title: 'Social media designs done for brands',
        category: 'Social Media',
        image: '/images/projects/social-media.jpeg',
        description:
            'Engaging social media design systems and templates created for various brands to maintain consistency across platforms.',
        driveLink:
            'https://drive.google.com/drive/folders/14IqJqfAeUfcyQQNmOE0MicDQaEJaB1ic',
    },
];

const categories = ['All', 'Brand Identity', 'Flyer Design', 'Social Media'];

export const Portfolio: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedItem, setSelectedItem] = useState<
        typeof portfolioItems[0] | null
    >(null);

    const filteredItems =
        activeCategory === 'All'
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeCategory);

    // Image error handler with fallback
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        // Set a fallback image if the original fails to load
        target.src = 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800';
    };

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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text text-transparent">
                        Portfolio
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Explore my latest design projects spanning brand identity, flyer
                        design, and social media communications
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
                                    ? 'bg-gradient-to-r from-sky-500 to-blue-800 text-white shadow-lg'
                                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md hover:border-sky-300'
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
                                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-sky-200 dark:hover:border-sky-600">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            onError={handleImageError}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center justify-between">
                                                <Eye className="text-white" size={24} />
                                                <div className="flex items-center gap-2">
                                                    <span className="text-white text-sm font-medium">
                                                        View Details
                                                    </span>
                                                    <ExternalLink className="text-white" size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-sky-600 dark:text-sky-400 font-semibold mb-2 flex items-center gap-2">
                                            {item.category}
                                            <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
                                className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border-2 border-sky-200 dark:border-sky-600"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    className="w-full h-64 object-cover"
                                    onError={handleImageError}
                                />
                                <div className="p-8">
                                    <div className="text-sm text-sky-600 dark:text-sky-400 font-semibold mb-2 flex items-center gap-2">
                                        {selectedItem.category}
                                        <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                        {selectedItem.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                        {selectedItem.description}
                                    </p>
                                    <div className="flex gap-4">
                                        <motion.a
                                            href={selectedItem.driveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gradient-to-r from-sky-500 to-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <ExternalLink size={18} />
                                            View Full Project
                                        </motion.a>
                                        <button
                                            onClick={() => setSelectedItem(null)}
                                            className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-300"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};