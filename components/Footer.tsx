import React from 'react';
import { Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-lazy-green rounded-full flex items-center justify-center text-white">
              <Coffee size={16} />
            </div>
            <span className="font-display font-bold text-lg text-gray-700">Lazy Coin</span>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Lazy Coin — Because effort is hard.</p>
          </div>

          <div className="flex gap-4">
             {/* Simple aesthetic dots representing 'links' that we are too lazy to put text on */}
             <div className="w-3 h-3 bg-lazy-yellow rounded-full"></div>
             <div className="w-3 h-3 bg-lazy-purple rounded-full"></div>
             <div className="w-3 h-3 bg-lazy-green rounded-full"></div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;