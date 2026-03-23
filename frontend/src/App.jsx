import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Cards from './components/Card';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbots';
import PreLoader from './components/PreLoader';
import Testimonials from './components/Testimonials';

import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // tunggu PreLoader selesai
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <main className="bg-[#FDFBF7]">
        <Navbar />
        <Hero />
        <Cards />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
        <Chatbot isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;