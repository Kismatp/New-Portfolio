import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Baagh-Chaal',
    subtitle: 'Traditional Board Game',
    description: 'An interactive implementation of the traditional Nepali tiger-goat strategy game with AI opponent logic and multiplayer support.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Kismatp/Baghchaal--Nepali-Board-Game',
    live: 'https://baghchaal.kismatpoudel.com.np/',
    image: '/images/Baghchaal.jpg',
    featured: true,
  },{
    id: 2,
    title: 'Studio Terra',
    subtitle: 'Creative Agency Landing',
    description: 'A bold, minimalist landing page for a fictional design studio. Features smooth scrolling, interactive elements, and responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Kismatp/studio-terra-landing-page',
    live: 'https://studio-terra.kismatpoudel.com.np/',
    image: '/images/studio-terra.jpg',
    featured: true,
  },
  {
    id: 3,
    title: 'Expense Tracker',
    subtitle: 'Personal Finance Manager',
    description: 'A responsive web app for tracking expenses with real-time calculations, categories, and local storage persistence.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
    github: 'https://github.com/Kismatp/Expense-Tracker',
    live: 'https://expense-tracker.kismatpoudel.com.np/',
    image: '/images/expense-tracker.jpg',
    featured: true,
  },
  
  {
    id: 4,
    title: 'Book Management',
    subtitle: 'Full-Stack CRUD System',
    description: 'A backend-focused system for managing a book inventory with full CRUD operations, REST API, and JSON data persistence.',
    tech: ['Node.js', 'Express', 'JavaScript', 'REST API'],
    github: 'https://github.com/Kismatp/book-management-system',
    live: null,
    image: '/images/book-management-system.png',
    featured: false,
  },
  {
    id: 5,
    title: 'Tic Tac Toe',
    subtitle: 'Two-Player Game',
    description: 'A classic two-player Tic Tac Toe implementation with winner detection, game state management, and responsive gameplay.',
    tech: ['React', 'TypeScript', 'Hooks', 'CSS Modules'],
    github: 'https://github.com/Kismatp/tic-tac-toe',
    live: 'https://tic-tac-toe.kismatpoudel.com.np/',
    image: '/images/tic-tac-toe.jpg',
    featured: false,
  },
]

const ExternalIcon = () => (
  <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
  </svg>
)

const GithubIcon = () => (
  <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
    <path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
  </svg>
)

function Projects() {
  const [showAll, setShowAll] = React.useState(false)
  const visible = showAll ? projects : projects.filter(p => p.featured)

  return (
    <section id='projects' className='section bg-[var(--color-bg)] border-t border-[var(--color-border)]' aria-labelledby='projects-heading'>
      <div className='container'>

        <header className='section-header animate-in'>
          <p className='section-label'>Work</p>
          <h2 id='projects-heading' className='section-title text-balance'>
            Selected<br/>Projects
          </h2>
          <p className='section-desc'>
            A curated collection of projects spanning web development, AI, and creative coding.
            Each project represents a unique challenge solved with intention.
          </p>
        </header>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in animate-in-delay-1'>
          {visible.map((project, i) => (
            <article
              key={project.id}
              className='card card-hover overflow-hidden stagger-in group'
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className='relative overflow-hidden aspect-[4/3] bg-[var(--color-bg-muted)]'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105'
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
                {/* Subtle overlay only on hover */}
                <div className='absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                {/* Featured badge */}
                {project.featured && (
                  <span className='absolute top-3 left-3 badge-accent z-10'>
                    Featured
                  </span>
                )}
              </div>

              {/* Info */}
              <div className='p-5 flex flex-col flex-1 min-h-[220px]'>
                <div className='flex items-center gap-3 mb-3'>
                  <span className='font-mono text-label text-fg-disabled uppercase tracking-wider'>
                    {String(project.id).padStart(2, '0')}
                  </span>
                  {project.featured && (
                    <span className='badge-accent text-xs'>Featured</span>
                  )}
                </div>
                <h3 className='text-heading-md font-display text-fg mb-2 group-hover:text-accent transition-colors duration-fast line-clamp-2'>
                  {project.title}
                </h3>
                <p className='text-body-sm text-fg-muted mb-3 line-clamp-1'>{project.subtitle}</p>
                <p className='text-body text-fg-subtle leading-relaxed mb-4 flex-1 line-clamp-3'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-1.5 mb-4'>
                  {project.tech.slice(0, 4).map((t, j) => (
                    <span
                      key={t}
                      className='px-2.5 py-1 text-caption font-medium text-fg-subtle bg-[var(--color-bg-muted)] border border-[var(--color-border)] rounded-md
                               transition-all duration-fast hover:border-accent hover:text-accent hover:bg-[var(--color-accent-muted)]'
                      style={{ animationDelay: `${j * 40}ms` }}
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className='px-2.5 py-1 text-caption font-medium text-fg-disabled bg-[var(--color-bg-muted)] border border-[var(--color-border)] rounded-md'>
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className='flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)] mt-auto'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn-ghost text-sm gap-1.5 flex-1 justify-center min-w-0'
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <GithubIcon />
                    <span className='hidden sm:inline'>Code</span>
                    <span className='sm:hidden'>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn-secondary text-sm gap-1.5 flex-1 justify-center min-w-0'
                      aria-label={`View ${project.title} live demo`}
                    >
                      <span className='hidden sm:inline'>Live</span>
                      <span className='sm:hidden'>Live</span>
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {projects.length > 3 && (
          <div className='mt-10 text-center animate-in animate-in-delay-2'>
            <button
              onClick={() => setShowAll(v => !v)}
              className='btn-ghost gap-2'
            >
              {showAll ? (
                <>
                  Show less
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
                  </svg>
                </>
              ) : (
                <>
                  View all {projects.length} projects
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

export default Projects