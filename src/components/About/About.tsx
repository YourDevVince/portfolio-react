import './About.css';

export default function About() {
  return (
    <div className='about'>
      <div className='about__container'>
        <header className='about__header'>
          <h2 className='about__title'>About</h2>
          <p className='about__subtitle'>
            A little about me and how I like to build.
          </p>
        </header>

        <div className='about__content'>
          <div className='about__bio glass'>
            <p className='about__text'>
              Front end developer focused on responsive UI, clean components,
              and turning designs into production ready experiences. Most of my
              work is in JavaScript and React, with an eye for usability and
              detail.
            </p>

            <p className='about__text'>
              Outside of tech, I'm an anime fan, with One Piece at the top of my
              list.
            </p>
          </div>

          <div className='about__card glass'>
            <h3 className='about__card-title'>Quick highlights</h3>

            <ul className='about__list'>
              <li className='about__item'>React / TypeScript / Vite</li>
              <li className='about__item'>REST APIs, auth, CRUD</li>
              <li className='about__item'>
                BEM + component-based architecture
              </li>
              <li className='about__item'>Accessibility + responsive layout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
