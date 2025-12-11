import React from 'react';
import { Smile, ZapOff, WifiOff } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-lazy-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="bg-white p-8 rounded-[3rem] shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-lazy-yellow rounded-bl-[3rem] opacity-50"></div>
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-lazy-purple rounded-tr-[3rem] opacity-50"></div>
               
               <h3 className="text-3xl font-display font-bold text-lazy-dark mb-8 relative z-10">Why Lazy Coin?</h3>
               
               <ul className="space-y-8 relative z-10">
                 <li className="flex items-start gap-4">
                   <div className="flex-shrink-0 w-12 h-12 bg-lazy-blue rounded-2xl flex items-center justify-center text-blue-600">
                     <ZapOff size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-gray-800">Because everyone is tired</h4>
                     <p className="text-gray-500 mt-1">Adulting is hard. We provide a digital safe space to admit you don't want to do anything today.</p>
                   </div>
                 </li>
                 
                 <li className="flex items-start gap-4">
                   <div className="flex-shrink-0 w-12 h-12 bg-lazy-purple rounded-2xl flex items-center justify-center text-purple-600">
                     <Smile size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-gray-800">Relatable memes &gt; serious stress</h4>
                     <p className="text-gray-500 mt-1">Life is serious enough. Your crypto portfolio shouldn't give you heart palpitations.</p>
                   </div>
                 </li>
                 
                 <li className="flex items-start gap-4">
                   <div className="flex-shrink-0 w-12 h-12 bg-lazy-green rounded-2xl flex items-center justify-center text-green-600">
                     <WifiOff size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-gray-800">The internet needs a break</h4>
                     <p className="text-gray-500 mt-1">We encourage touching grass... or at least napping on it.</p>
                   </div>
                 </li>
               </ul>
             </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-lazy-dark mb-6">
              Invest in <span className="text-lazy-purple">Rest</span>.
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We aren't trying to change the world. We're just trying to get through the week without crying. 
              Join a movement that understands the power of a well-timed nap.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/400/400?random=1" alt="Relaxing vibes" className="rounded-2xl shadow-md rotate-2 hover:rotate-0 transition-transform duration-500" />
               <img src="https://picsum.photos/400/400?random=2" alt="Cozy atmosphere" className="rounded-2xl shadow-md -rotate-2 hover:rotate-0 transition-transform duration-500 mt-8" />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Features;