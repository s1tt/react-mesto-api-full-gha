function BurgerMenu({ isOpen, toggleMenu }) {
  return (
    <div className="burger-menu">
      <button className="burger-menu__button" onClick={toggleMenu}>
        <span className={`burger-menu__icon ${isOpen ? 'open' : ''}`}></span>
      </button>
    </div>
  );
}

export default BurgerMenu;
