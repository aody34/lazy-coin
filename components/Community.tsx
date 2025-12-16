import React from 'react';
import { Twitter, MessageCircle, Send } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-lazy-blue/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="bg-white rounded-[3rem] p-12 md:p-16 shadow-xl relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-lazy-yellow via-lazy-purple to-lazy-green"></div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-lazy-dark mb-6">
            Join the Lazy Community
          </h2>
          
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Follow us for daily lazy memes & updates we’ll post… eventually. 
            We promise not to spam you, because that takes too much effort.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://x.com/LazyCoin_12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#1DA1F2] hover:bg-[#1a91da] text-white rounded-full font-bold transition-transform hover:-translate-y-1 shadow-lg"
            >
              <Twitter size={24} />
              <span>Twitter</span>
            </a>
            
            <a 
              href="https://t.me/lazy_coin13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#229ED9] hover:bg-[#1f8ec2] text-white rounded-full font-bold transition-transform hover:-translate-y-1 shadow-lg"
            >
              <Send size={24} />
              <span>Telegram</span>
            </a>

            <a href="#" className="flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-bold transition-transform hover:-translate-y-1 shadow-lg opacity-70 cursor-not-allowed">
              <MessageCircle size={24} />
              <span>Discord (Maybe)</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
             <p className="text-sm text-gray-400 italic">
               *Disclaimer: We are not responsible if you get too comfortable and miss your alarm.
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Community;