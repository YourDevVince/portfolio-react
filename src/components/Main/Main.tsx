import './Main.css';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects'
function Main() {
  return (
    <main className='main'>
      <Hero />
      <section id='projects' className='main__section main__section--projects'>
        <Projects />
      </section>

      <section id='about' className='main__section main__section--about'>
        <div className='main__container'>
          <h2 className='main__title'>About</h2>
          {/* about content goes here */}
        </div>
      </section>

      <section id='contact' className='main__section main__section--contact'>
        <div className='main__container'>
          <h2 className='main__title'>Contact</h2>
          {/* contact content goes here */}
        </div>
      </section>
    </main>
  );
}

export default Main;
