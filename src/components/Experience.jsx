import React from 'react'

function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'DataCamp Fellow',
      company: 'Code for Nepal',
      period: '2025 – 2026',
      description: 'Competitively selected for an intensive data science fellowship, accelerating expertise in Python, exploratory data analysis (EDA), and practical machine learning pipeline',
    }
    // {
    //   id: 2,
    //   role: 'Full Stack Development Intern',
    //   company: 'Decodelabs',
    //   period: 'Aug 2026 – Sep 2026',
    //   description: 'Full stack development internship',
    // }
  ]

  return (
    <section id='experience' className='py-20 px-6 bg-white dark:bg-gray-950 animate-fade-in-up'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-fade-in'>
          Experience
        </h2>

        <div className='relative max-w-3xl mx-auto'>
          <div className='absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700' />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className='relative pl-16 pb-12 animate-fade-in-up'
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className='absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-600 border-4 border-white dark:border-gray-950 shadow-lg flex items-center justify-center z-10'>
                <div className='w-2 h-2 rounded-full bg-white' />
              </div>

              <div className='bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 p-6 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:-translate-x-1 transition-all duration-300'>
                <span className='inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full mb-3'>
                  {exp.period}
                </span>

                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-1'>
                  {exp.role}
                </h3>

                <p className='text-blue-600 dark:text-blue-400 font-medium mb-3'>
                  {exp.company}
                </p>

                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}

          <div className='absolute left-0 bottom-0 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-white dark:border-gray-950 flex items-center justify-center z-10' />
        </div>
      </div>
    </section>
  )
}

export default Experience