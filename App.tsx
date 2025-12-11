import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col font-sans text-lazy-text">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Roadmap />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default App;