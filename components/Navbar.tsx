import React, { useState } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why Us?', href: '#features' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-lazy-purple/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 bg-lazy-purple rounded-full flex items-center justify-center text-white">
              <Coffee size={18} />
            </div>
            <span className="font-display font-bold text-xl text-lazy-text tracking-wide">Lazy Coin</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-500 hover:text-lazy-purple transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-lazy-purple hover:bg-purple-300 text-white px-5 py-2 rounded-full font-bold shadow-md transform hover:scale-105 transition-all duration-300">
              Buy Now (Later)
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-lazy-purple focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-lazy-purple hover:bg-lazy-purple/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <button className="w-full bg-lazy-purple text-white px-5 py-3 rounded-xl font-bold shadow-sm">
                Buy Now (Later)
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;