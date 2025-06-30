import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Award, Users, Zap } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Creating distinctive brand identities that resonate with target audiences and drive business growth.',
  },
  {
    icon: Award,
    title: 'Logo Design',
    description: 'Crafting memorable logos that capture brand essence and stand the test of time.',
  },
  {
    icon: Users,
    title: 'Web3 Branding',
    description: 'Specializing in blockchain and cryptocurrency brand identities for the digital future.',
  },
  {
    icon: Zap,
    title: 'Visual Design',
    description: 'Developing comprehensive visual systems including flyers, social media, and marketing materials.',
  },
];

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: '25+', label: 'Happy Clients' },
  { number: '100%', label: 'Satisfaction Rate' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate Graphic Designer who specializes in BRANDING with 3+ years of experience 
            building and creating captivating designs that have generated sales for different brands, 
            and contributing to blockchain innovations by branding several identities for different products.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Education</h3>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl max-w-2xl mx-auto">
            <div className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              BSc Computer Science
            </div>
            <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
              University of Uyo
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              January 2025 – Present
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};