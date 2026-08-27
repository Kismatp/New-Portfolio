import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700'>
      <div className='max-w-7xl mx-auto h-16 flex items-center justify-between px-6'>
        <a href='#home' className='text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition'>Kismat Poudel</a>

        <div className='hidden md:flex items-center gap-8'>
          <a href='#home' className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'>Home</a>
          <a href='#about' className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'>About</a>
          <a href='#projects' className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'>Projects</a>
          <a href='#certifications' className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'>Certifications</a>
          <a href='#experience' className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'>Experience</a>
          <a href='#contact' className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'>Contact</a>

          <button
            onClick={toggleDarkMode}
            className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition'
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <svg className='w-5 h-5 text-yellow-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
              </svg>
            ) : (
              <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
              </svg>
            )}
          </button>
        </div>

        <div className='md:hidden px-6 pb-4'>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className='w-full text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800'
          >
            {mobileOpen ? '✕ Close' : '☰ Menu'}
          </button>

          {mobileOpen && (
            <div className='mt-4 space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700'>
              <a href='#home' className='block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' onClick={() => setMobileOpen(false)}>Home</a>
              <a href='#about' className='block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' onClick={() => setMobileOpen(false)}>About</a>
              <a href='#projects' className='block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' onClick={() => setMobileOpen(false)}>Projects</a>
              <a href='#certifications' className='block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' onClick={() => setMobileOpen(false)}>Certifications</a>
              <a href='#experience' className='block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' onClick={() => setMobileOpen(false)}>Experience</a>
              <a href='#contact' className='block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' onClick={() => setMobileOpen(false)}>Contact</a>

              <button
                onClick={toggleDarkMode}
                className='w-full flex items-center justify-between p-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              >
                <span>{darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar