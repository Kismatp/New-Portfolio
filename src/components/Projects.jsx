import React from 'react'
function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Task Manager App',
      description: 'A React app to add, delete, and mark tasks complete. Uses useState for state management.',
      tech: ['React', 'useState', 'CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: null
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Fetches weather data from API using useEffect. Shows current weather and 5-day forecast.',
      tech: ['React', 'useEffect', 'API', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: null
    },
    {
      id: 3,
      title: 'E-commerce Cart',
      description: 'Shopping cart with add/remove items, quantity update, and total calculation.',
      tech: ['React', 'useState', 'Props', 'Context API'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: null
    },
    {
      id: 3,
      title: 'E-commerce Cart',
      description: 'Shopping cart with add/remove items, quantity update, and total calculation.',
      tech: ['React', 'useState', 'Props', 'Context API'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: null
    },
    {
      id: 3,
      title: 'E-commerce Cart',
      description: 'Shopping cart with add/remove items, quantity update, and total calculation.',
      tech: ['React', 'useState', 'Props', 'Context API'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: null
    }
  ]

  const [showAll, setShowAll] = React.useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section id='projects' className='py-20 px-6 bg-white dark:bg-gray-950'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center'>
          Projects
        </h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
          {visibleProjects.map((project) => (
            <div key={project.id} className='bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 p-6 hover:border-blue-200 transition-colors'>
              
                <div className='h-40 mb-4 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center'>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className='w-full h-full object-cover rounded-lg' />
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
                    <span key={tech} className='px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded'>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex gap-3'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium underline'
                  >
                    GitHub
                  </a>
                  
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm text-gray-600 dark:text-gray-600 hover:text-gray-700 font-medium underline'
                  >
                    Live Demo
                  </a>
                </div>
              </div>
          ))}
        </div>

        {projects.length > 4 && (
          <div className='mt-8 text-center'>
            <button
              onClick={() => setShowAll(!showAll)}
              className='w-full max-w-md px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:text-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
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