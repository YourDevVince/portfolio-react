import './Header.css';
import Logo from '../../assets/vince-logo.png';
function Header() {
  return (
    <div className='Header'>
      <div className='header__container'>
        <img className='header__logo' src={Logo} alt='App logo' />
        <ul className='header__nav'>
          <li className='header__nav-item'>Projects</li>
          <li className='header__nav-item'>About</li>
          <li className='header__nav-item'>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
