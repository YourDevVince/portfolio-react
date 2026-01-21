import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import './Header.css';
import Logo from '../../assets/vince-logo.png';

function isMobileWidth() {
  return window.innerWidth < 750;
}

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [isMobile, setIsMobile] = useState(isMobileWidth());
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const startY = window.scrollY;

    const handleScroll = () => {
      if (Math.abs(window.scrollY - startY) > 10) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    function handleWindowResize() {
      setIsMobile(isMobileWidth());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <header id='header' className='header'>
      {isMobile ? (
        <div className='header__container_type-mobile glass'>
          <div className='header__container-mobile-block'>
            <a
              className='header__logo-link'
              href='#hero'
              aria-label='Go to top'
            >
              <img
                className='header__logo'
                src={Logo}
                alt='App logo of animated Vince'
              />
            </a>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>

          <div
            className={`header__mobile-menu ${
              isOpen ? 'header__mobile-menu_open' : ''
            }`}
          >
            <div className='header__mobile-menu-container'>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className='header__mobile-link'
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className='header__container glass'>
          <div className='header__logo-container'>
            <a
              className='header__logo-link'
              href='#hero'
              aria-label='Go to top'
            >
              <img
                className='header__logo'
                src={Logo}
                alt='App logo of animated Vince'
              />
            </a>
            <span className='header__logo-text'>YourDevVince</span>
          </div>

          <nav className='header__nav-container' aria-label='Primary'>
            <ul className='header__nav'>
              <li className='header__nav-item'>
                <a className='header__nav-link' href='#projects'>
                  Projects
                </a>
              </li>
              <li className='header__nav-item'>
                <a className='header__nav-link' href='#about'>
                  About
                </a>
              </li>
              <li className='header__nav-item'>
                <a className='header__nav-link' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
