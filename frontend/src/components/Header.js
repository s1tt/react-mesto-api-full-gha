import { Link, useLocation } from 'react-router-dom';
import logo from '../images/Header__logo.svg';
import { useState, useEffect } from 'react';

import BurgerMenu from './BurgerMenu';

function Header({ loggedIn, email, onSignOut }) {
  const location = useLocation();
  const textLoggedOut = location.pathname === '/sign-in' ? 'Регистрация' : 'Войти';
  const linkLoggedOut = location.pathname === '/sign-in' ? '/sign-up' : '/sign-in';

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    setIsOpen(false);
    onSignOut();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setIsOpen(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="burger-menu__info">
          <span className="burger-menu__info-email">{email}</span>
          <Link to="./sign-in" onClick={handleSignOut} className="burger-menu__info-logout">
            Выйти
          </Link>
        </div>
      )}

      <header className="header">
        <img src={logo} alt="Логотип сайта" className="header__logo" />
        {isMobile && loggedIn && <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />}
        {isMobile && !loggedIn && (
          <Link to={linkLoggedOut} onClick={onSignOut} className="header__auth-link">
            {textLoggedOut}
          </Link>
        )}

        {!isMobile && (
          <div className="header__info">
            {loggedIn ? (
              <>
                <span className="header__email">{email}</span>
                <Link to="./sign-in" onClick={handleSignOut} className="header__auth-link">
                  Выйти
                </Link>
              </>
            ) : (
              <Link to={linkLoggedOut} onClick={onSignOut} className="header__auth-link">
                {textLoggedOut}
              </Link>
            )}
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
