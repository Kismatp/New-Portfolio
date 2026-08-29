import React from 'react'

function About() {
  return (
    <section id='about' className='py-20 px-6 bg-white dark:bg-gray-950 animate-fade-in-up'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-fade-in'>
          About Me
        </h2>
        
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='text-center animate-fade-in-delay-1'>
            <div className='w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-transform duration-300'>
              <img src="/images/Image.jpg" alt="Kismat Poudel" className='w-full h-full object-cover hover:scale-110 transition-transform duration-500' />
            </div>
          </div>
          
          <div className='animate-fade-in-delay-2'>
            <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>
              Hi, I'm <span className='text-blue-600 dark:text-blue-400'>Kismat Poudel</span>
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
              Frontend developer passionate about building clean, accessible 
              user interfaces with React. Currently learning and building 
              projects to grow my skills.
            </p>
            
            <div className='grid grid-cols-3 gap-6 mb-8'>
              <div className='text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200'>
                <p className='text-2xl font-bold text-blue-600 dark:text-blue-400'>2+</p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>Years Learning</p>
              </div>
              <div className='text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200'>
                <p className='text-2xl font-bold text-blue-600 dark:text-blue-400'>10+</p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>Projects Built</p>
              </div>
              <div className='text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200'>
                <p className='text-2xl font-bold text-blue-600 dark:text-blue-400'>5+</p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>Technologies</p>
              </div>
            </div>
            
            <div className='flex gap-4'>
              <a href='#contact' className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200'>
                Get In Touch
              </a>
              <a href='/CV_Kismat_Poudel.pdf' className='border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-2 rounded-lg hover:bg-blue-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200'>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About