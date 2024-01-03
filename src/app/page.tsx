import { About, Contact, Experience, Hero, Projects } from './components';
import { Footer, Navbar } from './components/shared';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
