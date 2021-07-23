import React, { useState } from 'react';
import Link from 'next/link';

const HeaderLink = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="nav_bar">
      <Link href="/">
        <div>Logo</div>
      </Link>

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
          <Link href="/#projekty">Projekty v remízku</Link>
        </li>
        <li>
          <Link href="/#kolektiv-umelcu">Kolektiv umělců při remízku</Link>
        </li>
        <li>
          <Link href="/#filosofie-spolku">Filosofie spolku</Link>
        </li>
        <li>
          <Link href="/#zazij-remizek">Zažij Remízek</Link>
        </li>
        <li>
          <Link href="/#kontakt">Kontakt</Link>
        </li>
        <li>
          <Link href="/#blog">Blog</Link>
        </li>
        <li>
          <Link href="/#rental">Rental</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderLink;
