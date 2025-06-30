import React from 'react';
import { motion } from 'framer-motion';
import { Palette, FileText, Share2, Coins, Sparkles, Target } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description: 'Complete brand identity packages including logo design, color palettes, typography, and brand guidelines.',
    features: ['Logo Design', 'Brand Guidelines', 'Color Systems', 'Typography Selection']
  },
  {
    icon: FileText,
    title: 'Flyer & Print Design',
    description: 'Eye-catching promotional materials for events, businesses, and special occasions.',
    features: ['Event Flyers', 'Business Cards', 'Posters', 'Brochures']
  },
  {
    icon: Share2,
    title: 'Social Media Design',
    description: 'Cohesive social media design systems that maintain brand consistency across all platforms.',
    features: ['Post Templates', 'Story Designs', 'Cover Photos', 'Ad Creatives']
  },
  {
    icon: Coins,
    title: 'Web3 & Crypto Branding',
    description: 'Specialized branding for blockchain projects, NFT collections, and cryptocurrency ventures.',
    features: ['NFT Collection Design', 'DeFi Platform Branding', 'Token Design', 'Whitepaper Design']
  },
  {
    icon: Sparkles,
    title: 'Mockup Design',
    description: 'Professional mockups to showcase your brand and products in realistic settings.',
    features: ['Product Mockups', 'Brand Presentations', '3D Visualizations', 'Packaging Design']
  },
  {
    icon: Target,
    title: 'Consultation & Strategy',
    description: 'Strategic design consultation to align your visual identity with business objectives.',
    features: ['Brand Strategy', 'Design Audits', 'Market Research', 'Competitor Analysis']
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive design solutions to elevate your brand and drive business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="text-white" size={32} />
              </motion.div>

              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className="mt-6 text-blue-600 dark:text-blue-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:idsam.designs@gmail.com"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};