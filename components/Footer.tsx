// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
// Optional: Import icons from lucide-react for social media links
// npm install lucide-react
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    // mt-12 gives some space above the footer.
    // bg-gray-800 for dark background, text-gray-300 for light text.
    // py-10 for vertical padding, px-4 for default horizontal padding.
    // sm:px-6 and lg:px-8 for responsive padding.
    <footer className="bg-gray-800 text-gray-300 py-10 px-4 sm:px-6 lg:px-8 mt-12">
      {/* Main content grid. Uses container for max-width and centering. */}
      {/* Responsive grid:
          - Default (mobile): 1 column
          - sm (640px+): 2 columns
          - lg (1024px+): 4 columns
          This provides a smoother transition for tablets. */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8">

        {/* Section 1: Logo and Description */}
        <div className="col-span-1">
          <Link href="/" className="text-3xl font-extrabold text-white leading-none" aria-label="Nafay Home">
            Nafay <span className="text-yellow-500 text-xl">.</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Your one-stop shop for the latest electronics, gadgets, and accessories. Quality products and unbeatable prices.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={24} className="hover:text-blue-500 transition-colors duration-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={24} className="hover:text-pink-500 transition-colors duration-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={24} className="hover:text-blue-400 transition-colors duration-200" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} className="hover:text-blue-600 transition-colors duration-200" />
            </a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors duration-200">Shop All</Link></li>
            <li><Link href="/blogs" className="hover:text-white transition-colors duration-200">Blog</Link></li>
            <li><Link href="/faqs" className="hover:text-white transition-colors duration-200">FAQs</Link></li>
          </ul>
        </div>

        {/* Section 3: Customer Service */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><Link href="/shipping" className="hover:text-white transition-colors duration-200">Shipping & Returns</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors duration-200">Terms & Conditions</Link></li>
            <li><Link href="/sitemap" className="hover:text-white transition-colors duration-200">Sitemap</Link></li>
          </ul>
        </div>

        {/* Section 4: Contact & Newsletter */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
          <p className="flex items-center mb-2">
            <Mail size={18} className="mr-2 text-gray-400" /> irshadhddexpt@gmail.com
          </p>
          <p className="flex items-center">
            <Phone size={18} className="mr-2 text-gray-400" /> +92 {346}-2868512
          </p>
          <h3 className="text-lg font-semibold text-white mt-6 mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for exclusive offers and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2"> {/* Added flex-col on mobile, flex-row on sm+ */}
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-2 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Email for newsletter subscription"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Nafay. All rights reserved.</p>
        <p className="mt-1">Designed with ❤️ by Nafay.</p>
      </div>
    </footer>
  );
};

export default Footer;
