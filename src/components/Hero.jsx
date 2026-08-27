import React from 'react'

function Hero() {
  return (
    <section id='home' className='min-h-[calc(100vh-64px)] flex items-center justify-center px-6 bg-white dark:bg-gray-950'>
      <div className='text-center max-w-3xl'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight'>
          Hi, I'm <span className='text-blue-600 dark:text-blue-400'>Kismat Poudel</span>   
        </h1>
        
        <p className='text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed'>
          Web Developer &nbsp;|&nbsp; Computer Engineer &nbsp;|&nbsp; AI Enthusiast
        </p>
        
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <a 
            href='#contact' 
            className='inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors'
          >
            Contact Me
          </a>
          
          <a 
            href='#projects' 
            className='inline-block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium underline'
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero