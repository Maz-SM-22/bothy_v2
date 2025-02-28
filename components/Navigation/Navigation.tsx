'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import navStyles from './Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={navStyles.nav}>
          {/* Mobile menu button */}
          <div className={navStyles.mobileMenuContainer}>
            <button onClick={() => setIsOpen(!isOpen)} className={navStyles.mobileMenu}>
              {isOpen ? (
                  <X size={24} className={navStyles.mobileMenuIcon} />
              ) :(
                  <Menu size={24} className={navStyles.mobileMenuIcon} />
              )}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className={navStyles.desktopLinkContainer}>
            <Link href="/" className={navStyles.desktopLinks}>
              Home
            </Link>
            <Link href="/projects" className={navStyles.desktopLinks}>
              Projects
            </Link>
          </div>

      
      {/* Mobile menu */}
      {isOpen && (
          <div className={navStyles.mobileMenuLinksContainer}>
            <Link
              href="/"
              className={navStyles.mobileLinks}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={navStyles.mobileLinks}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </div>
      )}
    </nav>
  );
}