import React from 'react';
import Mascot from './Mascot';
import { ArrowRight, Coffee } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-lazy-yellow/30 to-white pt-16">
      
      {/* Decorative blobs in background */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-lazy-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-delayed"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-lazy-green/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 bg-lazy-blue/30 rounded-full text-lazy-dark font-semibold text-sm mb-2 transform -rotate-2">
            💤 Officially the laziest coin on the blockchain
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-lazy-dark">
            Lazy Coin
            <span className="block text-2xl md:text-4xl mt-4 font-normal text-gray-600">
              The Coin for People Who Are Trying… But Tired.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 max-w-lg mx-auto md:mx-0">
            A meme project for everyone who keeps saying "I'll start tomorrow." Join the revolution... whenever you wake up.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="px-8 py-4 bg-lazy-purple hover:bg-purple-300 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
              Join the Community
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-lazy-text font-bold rounded-full shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
              <Coffee size={20} />
              Read Roadmap (Maybe)
            </button>
          </div>
        </div>

        {/* Mascot Image */}
        <div className="flex justify-center md:justify-end relative">
          <div className="w-full max-w-md md:max-w-lg animate-float">
            <Mascot className="w-full h-auto" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 right-0 bg-white p-3 rounded-2xl shadow-lg transform rotate-6 animate-pulse hidden lg:block">
            <span className="text-2xl">😴</span>
          </div>
          <div className="absolute bottom-20 left-10 bg-white p-3 rounded-2xl shadow-lg transform -rotate-12 hidden lg:block">
            <span className="text-2xl">☕️</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;