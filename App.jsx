import { useRef } from 'react';
import './styles/global.css';

import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Experience   from './components/Experience';
import Skills       from './components/Skills';
import Courses      from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  const sectionRefs = useRef({});

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
  };

  const ref = (id) => (el) => { sectionRefs.current[id] = el; };

  return (
    <>
      <Navbar sectionRefs={sectionRefs} />
      <Hero         sectionRef={ref('Home')}         scrollTo={scrollTo} />
      <About        sectionRef={ref('About')} />
      <Experience   sectionRef={ref('Experience')} />
      <Skills />
      <Courses      sectionRef={ref('Courses')} />
      <Testimonials sectionRef={ref('Testimonials')} />
      <Contact      sectionRef={ref('Contact')} />
      <Footer />
    </>
  );
}
