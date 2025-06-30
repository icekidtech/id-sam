import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ExternalLink, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              ID·SAM Frank
            </div>
            <p className="text-gray-400 leading-relaxed">
              Graphics and Brand Identity Designer specializing in creating captivating designs 
              that drive sales and building innovative Web3 brand identities.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              {['About', 'Portfolio', 'Services', 'Experience', 'Contact'].map((link) => (
                <motion.button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <motion.a
                href="mailto:idsam.designs@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} />
                idsam.designs@gmail.com
              </motion.a>
              <motion.a
                href="https://x.com/IDsam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <ExternalLink size={18} />
                @IDsam on X
              </motion.a>
            </div>

            <motion.div
              className="mt-6 p-4 bg-gray-800 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-sm text-gray-400 mb-2">Currently Studying</div>
              <div className="font-semibold">BSc Computer Science</div>
              <div className="text-sm text-blue-400">University of Uyo</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-gray-400">
            <span>© {currentYear} ID·SAM Frank. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-red-500" size={16} fill="currentColor" />
            </motion.div>
            <span>and passion for design</span>
          </div>

          <div className="text-gray-400 text-sm">
            Available for freelance projects
          </div>
        </motion.div>
      </div>
    </footer>
  );
};