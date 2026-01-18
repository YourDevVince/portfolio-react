import './Hero.css';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import Avatar from '../../assets/avatar-new.jpg';
function Hero() {
  return (
    <section className='hero' id='hero'>
      <img
        src={Avatar}
        alt='Profile picture of Vince Villanueva'
        className='hero__avatar'
      />
      <div className='hero__titles_container'>
        <h1 className='hero__titles-main'>Vince Villanueva</h1>
        <h2 className='hero__titles-sub'>Full Stack Software Engineer</h2>
        <h3 className='hero__titles-sub'>Dallas, Texas</h3>
      </div>
      <SocialLinks />
    </section>
  );
}

export default Hero;
