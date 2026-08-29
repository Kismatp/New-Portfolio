import React from 'react'

function Footer() {
  return (
    <footer className='bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 animate-fade-in'>
      <div className='max-w-7xl mx-auto px-6 py-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-gray-600 dark:text-gray-400 text-sm'>
            © {new Date().getFullYear()} Kismat Poudel. All rights reserved.
          </p>

          <div className='flex items-center gap-6'>
            <a
              href='https://github.com/Kismatp'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline hover:scale-105 transition-all duration-200 text-sm'
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/kismat-poudel-a63134284/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline hover:scale-105 transition-all duration-200 text-sm'
            >
              LinkedIn
            </a>
            <a
              href='mailto:kismatpaudel11@email.com'
              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline hover:scale-105 transition-all duration-200 text-sm'
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