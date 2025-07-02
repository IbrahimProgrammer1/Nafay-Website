// components/Header.jsx
"use client"; // This directive is necessary for client-side interactivity in Next.js 13+ App Router

import React, { useState } from 'react';
import Link from 'next/link'; // For client-side navigation
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Assuming shadcn/ui dropdowns are configured

// Import icons from lucide-react for a professional look
// Make sure you have lucide-react installed: npm install lucide-react
import { Menu, X, Search, User, ShoppingCart, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-blue-700 py-2 px-4 text-white text-center text-sm md:text-base overflow-hidden relative">
        <p className="animate-marquee whitespace-nowrap">
          Save up to 20% on all Toys & Accessories with “FLAT26OFF” code! Free shipping on orders over $50.
        </p>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto p-4 flex items-center justify-between border-b border-gray-200">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-4xl font-extrabold text-gray-900 leading-none" aria-label="Nafay Home">
            Nafay <span className="text-yellow-500 text-2xl">.</span>
          </Link>
        </div>

        {/* Search Bar (Desktop/Tablet) */}
        <div className="hidden lg:flex flex-grow max-w-xl mx-8 items-center border-2 border-blue-600 rounded-full overflow-hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-1 focus:outline-none">
              All Categories <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Select Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Electronics Item</DropdownMenuItem>
              <DropdownMenuItem>Laptop</DropdownMenuItem>
              <DropdownMenuItem>Charger</DropdownMenuItem>
              <DropdownMenuItem>Smart Devices</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <input
            type="text"
            placeholder="Search products here..."
            className="flex-grow p-2 outline-none text-gray-700 placeholder-gray-400 focus:ring-0"
            aria-label="Search products"
          />
          <button
            className="bg-blue-600 text-white p-3 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Perform search"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Desktop/Tablet Navigation Links & Icons */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200" aria-label="Contact Us">Contact</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors duration-200" aria-label="About Us">About Us</Link>
          <Link href="/faqs" className="hover:text-blue-600 transition-colors duration-200" aria-label="Frequently Asked Questions">FAQs</Link>
          <Link href="/blogs" className="hover:text-blue-600 transition-colors duration-200" aria-label="Our Blog">Blogs</Link>

          {/* User and Cart Icons */}
          <Link href="/profile" className="p-2 hover:bg-gray-100 rounded-full" aria-label="User Profile">
            <User size={20} className="text-gray-600" />
          </Link>
          <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full relative" aria-label="Shopping Cart">
            <ShoppingCart size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span> {/* Example: cart item count */}
          </Link>
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center space-x-4">
          <Link href="/cart" className="relative" aria-label="Shopping Cart">
            <ShoppingCart size={24} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            aria-label="Open mobile menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile-Only Search Bar */}
      <div className="lg:hidden container mx-auto px-4 pb-4">
        <div className="flex items-center border-2 border-blue-600 rounded-full overflow-hidden w-full">
          <input
            type="text"
            placeholder="Search products here..."
            className="flex-grow p-2 outline-none text-gray-700 placeholder-gray-400 focus:ring-0"
            aria-label="Search products"
          />
          <button
            className="bg-blue-600 text-white p-3 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Perform search"
          >
            <Search size={20} />
          </button>
        </div>
      </div>


      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              aria-label="Close mobile menu"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 text-lg font-medium text-gray-800">
            <Link href="/contact" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link href="/about" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/faqs" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>FAQs</Link>
            <Link href="/blogs" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-left py-2 hover:text-blue-600 flex items-center justify-between">
                All Categories <ChevronDown size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuLabel>Select Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsMobileMenuOpen(false)}>Electronics Item</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsMobileMenuOpen(false)}>Laptop</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsMobileMenuOpen(false)}>Charger</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsMobileMenuOpen(false)}>Smart Devices</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile User and Cart (optional, if not in main mobile header) */}
            <Link href="/profile" className="flex items-center gap-2 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              <User size={20} /> My Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
