import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

const experiences = [
  {
    year: '2021 - Present',
    title: 'Freelance Graphics Designer',
    company: 'Self-Employed',
    location: 'Remote',
    description: 'Building captivating brand identities and visual designs for clients across various industries, specializing in Web3 and blockchain projects.',
    achievements: [
      'Successfully completed 50+ design projects',
      'Generated measurable sales growth for multiple brands',
      'Specialized in Web3 and cryptocurrency branding',
      'Maintained 100% client satisfaction rate'
    ]
  },
  {
    year: '2022 - Present',
    title: 'Web3 Brand Specialist',
    company: 'Blockchain Projects',
    location: 'Global',
    description: 'Contributing to blockchain innovations by creating visual identities for NFT collections, DeFi protocols, and cryptocurrency ventures.',
    achievements: [
      'Branded multiple successful NFT collections',
      'Created identities for DeFi platforms',
      'Designed marketing materials for ICO launches',
      'Established visual standards for Web3 projects'
    ]
  },
  {
    year: '2020 - 2021',
    title: 'Junior Graphic Designer',
    company: 'Design Studio',
    location: 'Nigeria',
    description: 'Gained foundational experience in graphic design, working on various projects including print materials, digital designs, and brand development.',
    achievements: [
      'Learned advanced design principles',
      'Collaborated with senior designers',
      'Worked on diverse project types',
      'Developed professional design workflow'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey of continuous growth and innovation in the world of design
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-4 md:left-1/2 top-16 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-1/2 z-0"></div>
              )}

              <div className={`flex flex-col md:flex-row items-start md:items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 transform md:-translate-x-1/2 flex items-center justify-center z-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Calendar className="text-white" size={16} />
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      <Calendar size={16} />
                      {experience.year}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {experience.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                      <div className="font-medium">{experience.company}</div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {experience.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        <Award size={16} />
                        Key Achievements
                      </div>
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + achievementIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};