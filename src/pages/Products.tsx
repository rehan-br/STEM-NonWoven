import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { products } from '../data/content';

const Products = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl">
              Premium non-woven bags for every business need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain bg-gray-50 p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Available Sizes:</h4>
                    <ul className="space-y-1">
                      {product.sizes.map((size, index) => (
                        <li key={index} className="text-gray-600">
                          • {size}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <Check className="h-4 w-4 text-emerald-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Solutions?</h2>
          <p className="text-gray-600 mb-8">
            We offer customized solutions to meet your specific requirements. 
            Contact us to discuss your unique needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn-primary"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Products;