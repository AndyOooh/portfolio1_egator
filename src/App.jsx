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
  return (
    <>
      <Header />
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


