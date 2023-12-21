import { About, Hero } from './components';
import { Navbar } from './components/shared';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
};

export default Home;
