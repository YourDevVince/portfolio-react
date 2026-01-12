import './Hero.css';
import { SocialLinks } from '../SocialLinks/SocialLinks';
function Hero() {
  return (
    <section className='hero'>
      <div className='hero__titles_container'>
        <h1 className='hero__titles-main'>Vince Villanueva</h1>
        <h2 className='hero__titles-sub'>Full Stack Software Engineer</h2>
      </div>
      <SocialLinks />
    </section>
  );
}

export default Hero;
