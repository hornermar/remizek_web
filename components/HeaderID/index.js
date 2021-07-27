import React, { useState } from 'react';
import Link from 'next/link';

const HeaderID = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="nav_bar">
      <button name="menu" onClick={handleToggle}>
        <div className={navbarOpen ? 'hamburger is-opened' : 'hamburger'}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <ul
        onClick={() => closeMenu()}
        className={`menu_nav ${navbarOpen ? ' show_menu' : ''}`}
      >
        <li className="menu_nav__first">
          <Link href="#projekty">Projekty</Link>
        </li>
        <li>
          <Link href="/kolektiv-umelcu" passHref>
            Kolektiv umělců
          </Link>
        </li>
        <li>
          <Link href="#filosofie-spolku" passHref>
            Filosofie spolku
          </Link>
        </li>
        <li>
          <Link href="#zazij-remizek" passHref>
            Zažij Remízek
          </Link>
        </li>
        <li>
          <Link href="#kontakt" passHref>
            Kontakt
          </Link>
        </li>
        <li>
          <Link href="#blog" passHref>
            Blog
          </Link>
        </li>
        <li>
          <Link href="#rental" passHref>
            Rental
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderID;
