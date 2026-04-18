"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Header = () => {
  const path = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { display: "Launch System", slug: "/" },
    { display: "Why the Moon", slug: "/why-the-moon" },
    { display: "The Missions", slug: "/missions" },
  ]

  return (
    <header className={`header ${path === "/why-the-moon" ? "header--light" : ""}`}>
      <img
        className="header__logo"
        src="/assets/Artemis_program.svg"
        alt="NASA Artemis program logo"
      />

      {/* Hamburger button — top right */}
      <button
        className={`header__hamburger ${menuOpen ? "header__hamburger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Slide-in nav drawer */}
      <nav className={`header__drawer ${menuOpen ? "header__drawer--open" : ""}`}>
        <ul className="header__nav">
          {navItems.map((item) => (
            <li key={item.slug}>
              <Link
                href={item.slug}
                className="header__nav-label"
                onClick={() => setMenuOpen(false)}
              >
                {item.display}
              </Link>
            </li>
          ))}
        </ul>
          <Link href="/newsletter" onClick={() => setMenuOpen(false)}>
            <button className="btn btn--black btn--small">NASA's Newsletter</button>
          </Link>
      </nav>

      {/* Overlay to close menu on outside click */}
      {menuOpen && (
        <div
          className="header__overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Header