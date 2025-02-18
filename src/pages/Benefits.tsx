import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, DollarSign, Shield, Truck, Factory } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Eco-Friendly Material",
      description: "Our non-woven bags are made from 100% recyclable polypropylene, significantly reducing environmental impact compared to traditional plastic bags."
    },
    {
      icon: <Recycle className="h-12 w-12" />,
      title: "Reusable & Durable",
      description: "Built to last with reinforced stitching and high-quality materials, our bags can be reused hundreds of times, making them a sustainable choice."
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "Cost-Effective",
      description: "Lower production costs and bulk ordering options make our non-woven bags an economical choice for businesses of all sizes."
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Quality Assured",
      description: "Every bag undergoes rigorous quality control checks to ensure it meets our high standards for durability and finish."
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Lightweight & Portable",
      description: "Despite their durability, our bags are lightweight and can be easily folded for storage, making them perfect for retail use."
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Custom Manufacturing",
      description: "Our state-of-the-art facility allows for customization in size, design, and printing to meet your specific branding needs."
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Why Choose Non-Woven Bags?</h1>
            <p className="text-xl font-medium">Discover the advantages of sustainable packaging solutions</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md card-hover"
              >
                <div className="text-emerald-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Ready to Make the Switch?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the growing number of businesses choosing sustainable packaging solutions. 
              Contact us today to learn more about our non-woven bags.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn-primary"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;