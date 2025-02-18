import dCut from '../images/dcut.jpg'
import wCut from '../images/wcut.webp'
import loopBag from '../images/loopbag.jpg'
import boxBag from '../images/boxbag.jpg'
import shoeBag from '../images/shoebag.webp'
import drinkBag from '../images/drinkbag.webp'

export const companyInfo = {
  name: 'STEM Non-woven Bags',
  location: 'Lahore, Pakistan',
  phone: '+92 320 8443321',
  email: 'info@stembags.com',
  address: '104-A2/M Quaid-e-Azam Industrial Estate Kot Lakhpat',
  socials: {
    facebook: 'https://facebook.com/stembags',
    instagram: 'https://instagram.com/stembags',
    linkedin: 'https://linkedin.com/company/stembags'
  }
};

export const products = [
  {
    id: 1,
    name: 'W-Cut Bag',
    description: 'Classic non-woven bag with W-shaped bottom gusset for enhanced stability and storage capacity. Perfect for retail and promotional use.',
    sizes: ['Small (25x30x10cm)', 'Medium (35x40x12cm)', 'Large (45x50x15cm)'],
    image: wCut, // Placeholder for your image
    features: [
      'W-shaped bottom for better stability',
      'Reinforced handles',
      'High load capacity',
      'Custom branding available'
    ]
  },
  {
    id: 2,
    name: 'D-Cut Bag',
    description: 'Versatile non-woven bag with D-shaped handles, offering comfort and durability. Ideal for shopping and everyday use.',
    sizes: ['Standard (30x40cm)', 'Large (40x50cm)', 'XL (50x60cm)'],
    image: dCut, // Placeholder for your image
    features: [
      'Comfortable D-cut handles',
      'Durable stitching',
      'Lightweight design',
      'Multiple size options'
    ]
  },
  {
    id: 3,
    name: 'Loop Bag',
    description: 'Premium non-woven bag with loop handles, providing superior carrying comfort and elegant appearance. Perfect for boutiques and high-end retail.',
    sizes: ['Boutique (30x35cm)', 'Standard (35x45cm)', 'Premium (45x55cm)'],
    image: loopBag, // Placeholder for your image
    features: [
      'Sturdy loop handles',
      'Premium finish',
      'Elegant design',
      'Enhanced durability'
    ]
  },
  {
    id: 4,
    name: 'Box Bag',
    description: 'Structured non-woven box bag with reinforced bottom and sides. Ideal for heavy items and organized storage.',
    sizes: ['Small Box (25x25x25cm)', 'Medium Box (35x35x35cm)', 'Large Box (45x45x45cm)'],
    image: boxBag, // Placeholder for your image
    features: [
      'Structured design',
      'Reinforced bottom',
      'Square base stability',
      'Heavy-duty capacity'
    ]
  },
  {
    id: 5,
    name: 'Shoe Bag',
    description: 'Specialized non-woven bag designed specifically for footwear, with dust protection and easy access.',
    sizes: ['Standard (30x20x10cm)', 'Large (40x30x15cm)', 'Boot Size (50x35x20cm)'],
    image: shoeBag, // Placeholder for your image
    features: [
      'Dust-proof design',
      'Easy access opening',
      'Breathable material',
      'Travel-friendly'
    ]
  },
  {
    id: 6,
    name: 'Drinks Holder Bag',
    description: 'Specialized non-woven bag with compartments designed for safely carrying bottles and beverages.',
    sizes: ['4-Bottle (25x25x30cm)', '6-Bottle (35x25x30cm)', '12-Bottle (45x30x35cm)'],
    image: drinkBag, // Placeholder for your image
    features: [
      'Divided compartments',
      'Bottle protection',
      'Reinforced handles',
      'Spill-resistant design'
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Khan',
    company: 'Fashion Retail Co.',
    content: 'STEM has been our go-to supplier for all our shopping bag needs. Their quality and service are unmatched.',
    role: 'Procurement Manager'
  },
  {
    id: 2,
    name: 'Ahmed Ali',
    company: 'Supermart Chain',
    content: 'The durability of STEM bags has significantly reduced our packaging costs while maintaining quality.',
    role: 'Operations Director'
  },
  {
    id: 3,
    name: 'Fatima Hassan',
    company: 'Boutique Brands',
    content: 'Their custom printing service has helped us maintain brand consistency across all our stores.',
    role: 'Brand Manager'
  }
];

export const partners = [
  'Metro Cash & Carry',
  'Carrefour Pakistan',
  'Packages Ltd',
  'Gul Ahmed',
  'Chase Up',
  'Imtiaz Super Market'
];

export const aboutContent = {
  whatIsStem: `STEM is a leading manufacturer of non-woven shopping bags in Pakistan, 
    dedicated to providing sustainable packaging solutions for businesses of all sizes. 
    Founded in Lahore, we combine innovative technology with eco-friendly materials to 
    create high-quality, durable bags that meet the diverse needs of our clients.`,
  
  vision: `Our vision is to become Pakistan's premier sustainable packaging solution provider, 
    leading the transition from plastic to eco-friendly alternatives. We aim to create a 
    positive environmental impact while delivering exceptional value to our customers through 
    innovation, quality, and service excellence.`
};