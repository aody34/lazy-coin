import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      title: "Phase 1 — Maybe Soon",
      items: ["Website launch (You are here)", "Lazy mascot artwork", "Meme drops", "Twitter community setup"],
      status: "current",
      color: "bg-lazy-yellow"
    },
    {
      title: "Phase 2 — When We Wake Up",
      items: ["Lazy tools (Procrastination Timer)", "Snooze Button Widget", "Merchandise: Hoodies & Pillows", "More nap breaks"],
      status: "upcoming",
      color: "bg-lazy-purple"
    },
    {
      title: "Phase 3 — Eventually Probably",
      items: ["Community challenges (Who sleeps longest?)", "Partnerships with meme pages", "Lazyverse concept art", "Global nap day"],
      status: "upcoming",
      color: "bg-lazy-green"
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-white relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="2" className="text-gray-500" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-lazy-dark mb-4">Roadmap (Lazy Version)</h2>
          <p className="text-xl text-gray-500">We plan to do these things. Eventually. Probably.</p>
        </div>

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Connector Line (Mobile) */}
              <div className="md:hidden absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              <div className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Visual marker */}
                <div className="hidden md:flex flex-col items-center justify-center w-12 flex-shrink-0">
                  <div className={`w-0.5 h-full bg-gray-200 ${index === 0 ? 'rounded-t-full' : ''} ${index === phases.length - 1 ? 'rounded-b-full h-1/2 self-start' : ''}`}></div>
                  <div className={`w-8 h-8 rounded-full border-4 border-white shadow-md z-10 -my-4 flex items-center justify-center ${
                      phase.status === 'current' ? 'bg-lazy-purple text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    {phase.status === 'current' ? <Clock size={14} /> : <Circle size={14} />}
                  </div>
                  <div className={`w-0.5 h-full bg-gray-200 ${index === phases.length - 1 ? 'hidden' : ''}`}></div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 w-full ${phase.color} bg-opacity-30 p-8 rounded-3xl border-2 border-white shadow-sm hover:shadow-md transition-shadow duration-300 relative`}>
                    {/* Mobile Marker */}
                    <div className={`md:hidden absolute -left-10 top-8 w-6 h-6 rounded-full border-2 border-white shadow-sm flex items-center justify-center ${
                       phase.status === 'current' ? 'bg-lazy-purple text-white' : 'bg-gray-200 text-gray-400'
                    }`}>
                        {phase.status === 'current' ? <Clock size={10} /> : <Circle size={10} />}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-lazy-dark mb-4">{phase.title}</h3>
                    <ul className="space-y-3">
                        {phase.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 size={20} className={`mt-0.5 flex-shrink-0 ${phase.status === 'current' && i < 2 ? 'text-green-500' : 'text-gray-400'}`} />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Roadmap;