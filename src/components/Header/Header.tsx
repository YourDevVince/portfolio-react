import './Header.css';
import Logo from '../../assets/vince-logo.png';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <a className='header__logo-link' href='#hero' aria-label='Go to top'>
          <img
            className='header__logo'
            src={Logo}
            alt='App logo of animated Vince'
          />
        </a>

        <nav className='header__nav-container' aria-label='Primary'>
          <ul className='header__nav'>
            <li className='header__nav-item'>
              <a className='header__nav-link' href='#projects'>Projects</a>
            </li>
            <li className='header__nav-item'>
              <a className='header__nav-link' href='#about'>About</a>
            </li>
            <li className='header__nav-item'>
              <a className='header__nav-link' href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;