import { About, Contact, Hero, Projects } from './components';
import { Footer, Navbar } from './components/shared';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
