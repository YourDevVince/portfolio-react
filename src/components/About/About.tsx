import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about__container">
        <header className="about__header">
          <h2 className="about__title">About</h2>
          <p className="about__subtitle">
            A little about me and how I like to build.
          </p>
        </header>

        <div className="about__content">
          <div className="about__bio">
            <p className="about__text">
              I'm Vince — a full-stack developer who enjoys building clean,
              responsive UI and shipping real features. I like working in React
              + TypeScript, and I'm always leveling up my system design, APIs,
              and product thinking.
            </p>

            <p className="about__text">
              I care a lot about code readability, accessibility, and making
              things feel smooth for users.
            </p>
          </div>

          <div className="about__card">
            <h3 className="about__card-title">Quick highlights</h3>

            <ul className="about__list">
              <li className="about__item">React / TypeScript / Vite</li>
              <li className="about__item">REST APIs, auth, CRUD</li>
              <li className="about__item">BEM + component-based architecture</li>
              <li className="about__item">Accessibility + responsive layout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}