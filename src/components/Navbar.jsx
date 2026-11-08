import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/useTheme'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (window.innerWidth >= 768) setMobileOpen(false)
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-normal ease-out-expo
        ${scrolled
          ? 'bg-[var(--color-bg)]/85 backdrop-blur-xl border-b border-[var(--color-border)]'
          : 'bg-transparent border-b border-transparent'}`}
      role="banner"
    >
      <div className='container flex h-16 items-center justify-between'>
        {/* Logo */}
        <a
          href='#home'
          className='font-semibold tracking-tight text-fg hover:text-accent transition-colors duration-fast focus-ring flex items-center gap-2'
          aria-label='Kismat Poudel - Home'
        >
          <span className='text-accent font-display'>Kismat</span>
          <span className='text-fg'>Poudel</span>
        </a>

        {/* Desktop nav */}
        <nav className='hidden md:flex items-center gap-6' aria-label='Main navigation'>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className='text-sm font-medium text-fg-subtle hover:text-fg transition-colors duration-fast focus-ring rounded-sm px-2 py-1 -mx-1 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-normal hover:after:w-full'
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className='flex items-center gap-2'>
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className='w-10 h-10 flex items-center justify-center rounded-md text-fg-subtle hover:text-fg hover:bg-[var(--color-bg-muted)] transition-all duration-fast focus-ring relative overflow-hidden'
          >
            <span className='relative z-10 transition-transform duration-300 ease-spring'>
              {darkMode ? (
                <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24' aria-hidden='true'>
                  <circle cx='12' cy='12' r='5'/>
                  <path strokeLinecap='round' d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42'/>
                </svg>
              ) : (
                <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24' aria-hidden='true'>
                  <path strokeLinecap='round' d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'/>
                </svg>
              )}
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls='mobile-menu'
            className='md:hidden w-10 h-10 flex items-center justify-center rounded-md text-fg-subtle hover:text-fg hover:bg-[var(--color-bg-muted)] transition-all duration-fast focus-ring'
          >
            {mobileOpen ? (
              <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24' aria-hidden='true'>
                <path strokeLinecap='round' d='M6 18L18 6M6 6l12 12'/>
              </svg>
            ) : (
              <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24' aria-hidden='true'>
                <path strokeLinecap='round' d='M4 6h16M4 12h16M4 18h16'/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id='mobile-menu'
        className={`md:hidden overflow-hidden transition-all duration-slower ease-out-expo
          ${mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!mobileOpen}
      >
        <nav className='bg-[var(--color-bg-elevated)] border-t border-[var(--color-border)] px-[var(--space-container)] py-4 flex flex-col gap-1'>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className='py-3 text-sm font-medium text-fg-muted hover:text-fg transition-colors duration-fast focus-ring rounded-md px-2'
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar