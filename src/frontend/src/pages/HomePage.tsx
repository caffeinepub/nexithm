import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Works from '../sections/Works';
import GetCode from '../sections/GetCode';
import Contact from '../sections/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Works />
      <GetCode />
      <Contact />
    </main>
  );
}
