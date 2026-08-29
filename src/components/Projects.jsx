import React from 'react'
function Projects() {
  const projects = [
    
    {
      id: 1,
      title: 'Studio Terra Landing Page',
      description: 'A responsive and accessible landing page for a fictional creative digital agency.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Kismatp/studio-terra-landing-page',
      live: 'https://studio-terra.kismatpoudel.com.np/',
      image: '/images/studio-terra.jpg'
    },
    {
      id: 2,
      title: 'Expense Tracker',
      description: 'A responsive expense tracker that manages and stores expenses using Local Storage.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      github: 'https://github.com/Kismatp/Expense-Tracker',
      live: 'https://expense-tracker.kismatpoudel.com.np/',
      image: '/images/expense-tracker.jpg'
    },
    {
      id: 3,
      title: 'Baagh-Chaal Game',
      description: 'A traditional Tiger-Goat strategy game built with HTML, CSS, and JavaScript.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Kismatp/Baghchaal--Nepali-Board-Game',
      live: 'https://baghchaal.kismatpoudel.com.np/',
      image: '/images/Baghchaal.jpg'
    },
    {
      id: 4,
      title: 'Book Management System',
      description: 'A full-stack book management app with CRUD operations, validation, and JSON storage.',
      tech: ['Node.js', 'Express', 'JavaScript', 'JSON'],
      github: 'https://github.com/Kismatp/book-management-system',
      live: 'https://github.com/Kismatp/book-management-system',
      image: '/images/book-management-system.png'
    },
    {
      id: 5,
      title: 'Tic Tac Toe',
      description: 'A responsive two-player Tic Tac Toe game with winner and draw detection.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Kismatp/tic-tac-toe',
      live: 'https://tic-tac-toe.kismatpoudel.com.np/',
      image: '/images/tic-tac-toe.jpg'
    },
    
  ]

  const [showAll, setShowAll] = React.useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id='projects' className='py-20 px-6 bg-white dark:bg-gray-950 animate-fade-in-up'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-fade-in'>
          Projects
        </h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {visibleProjects.map((project, index) => (
            <div key={project.id} className='bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 p-6 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up' style={{ animationDelay: `${index * 100}ms` }}>
              
                <div className='aspect-video mb-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden'>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className='w-full h-full object-contain hover:scale-105 transition-transform duration-500' />
                  ) : (
                    <span className='text-gray-400 dark:text-gray-500'>Project Image</span>
                  )}
                </div>
              


                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                  {project.title}
                </h3>

                <p className='text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tech.map((tech) => (
                    <span key={tech} className='px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded hover:scale-110 transition-transform duration-200'>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex gap-3'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium underline transition-colors'
                  >
                    GitHub
                  </a>
                  
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm text-gray-600 dark:text-gray-600 hover:text-gray-700 font-medium underline transition-colors'
                  >
                    Live Demo
                  </a>
                </div>
              </div>
          ))}
        </div>

        {projects.length > 4 && (
          <div className='mt-8 text-center animate-fade-in'>
            <button
              onClick={() => setShowAll(!showAll)}
              className='w-full max-w-md px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:text-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            >
              {showAll ? 'View Less' : 'View More'}
              <svg className='w-5 h-5 -mr-2 inline transition-transform duration-200' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <path d='M6 9l6 6 6-6'/>
                <path d='M6 15l6-6 6 6'/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects