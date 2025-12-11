import React from 'react';
import { Sofa, Clock, BatteryLow } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-lazy-dark mb-4">What is Lazy Coin?</h2>
          <div className="w-24 h-1 bg-lazy-yellow mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Lazy Coin represents all of us who want success… but also want to nap. 
            It’s a meme project built around humor, community, and chill vibes.
            We promise to go to the moon, just as soon as we finish this coffee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-lazy-yellow/20 p-8 rounded-3xl border border-lazy-yellow/50 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-amber-500">
              <Sofa size={32} />
            </div>
            <h3 className="text-xl font-bold text-lazy-dark mb-3">Maximum Comfort</h3>
            <p className="text-gray-600">
              Why stress about charts when you can look at memes from your bed? We prioritize comfort over volatility.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-lazy-purple/20 p-8 rounded-3xl border border-lazy-purple/50 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-purple-500">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold text-lazy-dark mb-3">Zero Rush</h3>
            <p className="text-gray-600">
              We operate on "Lazy Time". Updates happen when they happen. No deadlines, no pressure, just vibes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-lazy-green/20 p-8 rounded-3xl border border-lazy-green/50 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-green-500">
              <BatteryLow size={32} />
            </div>
            <h3 className="text-xl font-bold text-lazy-dark mb-3">Low Energy</h3>
            <p className="text-gray-600">
              Our community is active... barely. We believe in efficiency: doing the least amount of work for the most amount of meme.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;