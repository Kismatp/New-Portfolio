import React from 'react'

function Hero() {
  return (
    <section id='home' className='min-h-[calc(100vh-64px)] flex items-center justify-center px-6 bg-white dark:bg-gray-950'>
      <div className='text-center max-w-3xl animate-fade-in-up'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in'>
          Hi, I'm <span className='text-blue-600 dark:text-blue-400'>Kismat Poudel</span>   
        </h1>
        
        <p className='text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in-delay-1'>
          Web Developer &nbsp;|&nbsp; Computer Engineer &nbsp;|&nbsp; AI Enthusiast
        </p>
        
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2'>
          <a 
            href='#contact' 
            className='inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200'
          >
            Contact Me
          </a>
          
          <a 
            href='#projects' 
            className='inline-block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium underline transition-colors'
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero