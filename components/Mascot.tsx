import React from 'react';
import { Coffee } from 'lucide-react';

interface MascotProps {
  className?: string;
  expression?: 'sleep' | 'awake' | 'happy';
}

const Mascot: React.FC<MascotProps> = ({ className = "", expression = 'sleep' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        {/* Blob Body */}
        <path
          d="M45.1,-63.9C58.9,-54.6,70.9,-43.3,78.6,-29.7C86.3,-16.1,89.7,-0.2,85.8,14.3C81.9,28.8,70.7,41.9,58.3,51.8C45.9,61.7,32.3,68.4,18.1,70.9C3.9,73.4,-10.9,71.7,-24.8,66.3C-38.7,60.9,-51.7,51.8,-60.8,39.9C-69.9,28,-75.1,13.3,-73.8,-0.9C-72.5,-15.1,-64.7,-28.8,-54.2,-39.8C-43.7,-50.8,-30.5,-59.1,-16.9,-61.7C-3.3,-64.3,10.3,-61.2,23.9,-58"
          transform="translate(100 100)"
          fill="#FFF9C4"
          stroke="#E1BEE7"
          strokeWidth="3"
        />
        
        {/* Face */}
        {expression === 'sleep' && (
          <g transform="translate(100 110)">
            {/* Eyes - Closed lines */}
            <path d="M-25 -5 Q-15 5 -5 -5" stroke="#455A64" strokeWidth="4" strokeLinecap="round" />
            <path d="M5 -5 Q15 5 25 -5" stroke="#455A64" strokeWidth="4" strokeLinecap="round" />
            {/* Mouth - Small O for snoozing */}
            <circle cx="0" cy="15" r="5" fill="#F48FB1" />
          </g>
        )}

        {/* Zzz Animation Elements */}
        {expression === 'sleep' && (
          <>
            <text x="140" y="60" className="font-display font-bold fill-lazy-purple text-2xl animate-snooze" style={{ animationDelay: '0s' }}>Z</text>
            <text x="160" y="40" className="font-display font-bold fill-lazy-purple text-xl animate-snooze" style={{ animationDelay: '0.5s' }}>z</text>
            <text x="175" y="25" className="font-display font-bold fill-lazy-purple text-lg animate-snooze" style={{ animationDelay: '1s' }}>z</text>
          </>
        )}
      </svg>
      
      {/* Optional Mug */}
      <div className="absolute bottom-0 right-0 transform translate-x-[-20%] translate-y-[-10%] rotate-12">
        <Coffee className="text-amber-700 w-12 h-12 bg-white p-2 rounded-xl shadow-md" />
      </div>
    </div>
  );
};

export default Mascot;