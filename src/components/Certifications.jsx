import React from 'react'

function Certifications() {
  const certifications = [
    // { id: 1, title: 'React Basics', image: '/images/Thumbnail_pes.png' },
    // { id: 2, title: 'JavaScript Algorithms', image: '/images/js-cert.png' },
    // { id: 3, title: 'Responsive Web Design', image: '/images/rwd-cert.png' },
    // { id: 4, title: 'Frontend Libraries', image: '/images/Thumbnail_pes.png' },
    // { id: 5, title: 'Data Analysis', image: '/images/Thumbnail_pes.png' },
    
  ]

  const [showAll, setShowAll] = React.useState(false)
  const visibleCerts = showAll ? certifications : certifications.slice(0, 3)

  return (
    <section id='certifications' className='py-20 px-6 bg-gray-50 dark:bg-gray-950 animate-fade-in-up'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-fade-in'>
          Certifications
        </h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {visibleCerts.map((cert, index) => (
            <div key={cert.id} className='bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 p-6 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up' style={{ animationDelay: `${index * 100}ms` }}>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white text-center mb-4'>{cert.title}</h3>
              
              <div className='mt-4 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden'>
                {cert.image ? (
                  <a
                    href={cert.image}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block w-full h-full'
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                    />
                  </a>
                ) : (
                  <span className='text-gray-400 dark:text-gray-500 text-sm'>No Image</span>
                )}
              </div>

              <p className='text-xs text-gray-400 text-center mt-2'>Click the image to view</p>
            </div>
          ))}
        </div>

        {certifications.length > 3 && (
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

export default Certifications