import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Leaf } from 'lucide-react';
import { aboutContent } from '../data/content';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="hero-pattern text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">About STEM</h1>
            <p className="text-xl font-medium">Leading the way in sustainable packaging solutions</p>
          </motion.div>
        </div>
      </section>

      {/* What is STEM Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">What is STEM?</h2>
              <p className="text-gray-600 leading-relaxed">{aboutContent.whatIsStem}</p>
            </div>
            <div className="flex justify-center">
              <Leaf className="h-48 w-48 text-emerald-600" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1 flex justify-center">
              <Target className="h-48 w-48 text-emerald-600" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">{aboutContent.vision}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Our Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                Committed to delivering premium quality products that exceed expectations
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <Leaf className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Dedicated to environmental responsibility and sustainable practices
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving our products and processes
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;