import React from 'react'

function Footer() {
  return (
    <footer className='bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-6 py-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-gray-600 dark:text-gray-400 text-sm'>
            © {new Date().getFullYear()} Kismat Poudel. All rights reserved.
          </p>

          <div className='flex items-center gap-6'>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm'
            >
              GitHub
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm'
            >
              LinkedIn
            </a>
            <a
              href='mailto:your@email.com'
              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm'
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer