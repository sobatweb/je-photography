import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Cards from './components/Card';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbots';
import Testimonials from './components/Testimonials';



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
        
      <main className="bg-[#FDFBF7] overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Cards />
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