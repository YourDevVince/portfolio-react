import './Main.css';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects'
import About from '../About/About'
import Contact from '../Contact/Contact'

function Main() {
  return (
    <main className='main'>
      <section className="main__section main__section--hero">
        <Hero />
      </section>
      
      <section id='projects' className='main__section main__section--projects'>
        <Projects />
      </section>

      <section id='about' className='main__section main__section--about'>
          <About />
      </section>

      <section id='contact' className='main__section main__section--contact'>
        <Contact />
      </section>
    </main>
  );
}

export default Main;
