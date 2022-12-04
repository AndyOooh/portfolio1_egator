import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Nav from './components/Layout/Nav/Nav';
// import Portfolio from './components/Portfolio/Portfolio';
import Portfolio from './components/Portfolio/Portfolio';
// import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    text: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 150,
      width: 150,
      // backgroundColor: 'yellow',
      mixBlendMode: 'difference',
    },
  };

  const handleTextEnter = () => setCursorVariant('text');
  const handleTextLeave = () => setCursorVariant('default');

  return (
    <>
      <motion.div className='cursor' variants={variants} animate={cursorVariant} />
      <Header textEnter={handleTextEnter} textleave={handleTextLeave} />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
