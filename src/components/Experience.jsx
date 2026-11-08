import React from 'react'

const experiences = [
  {
    id: 1,
    role: 'DataCamp Fellow',
    company: 'Code for Nepal',
    period: 'Jun 2025 &ndash; Jan 2026',
    location: 'Remote',
    description: 'Intensive data science fellowship. Specialized in Python, exploratory data analysis, machine learning pipelines, and data visualization. Completed 15+ projects covering statistical analysis, predictive modeling, and ML deployment.',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'SQL', 'Git'],
    type: 'Fellowship',
  },
  {
    id: 2,
    role: 'Full Stack Development Intern',
    company: 'Decodelabs',
    period: 'Aug 2026 &ndash; Sep 2026',
    location: 'Remote',
    description: 'Full stack development internship. Built and maintained production features for client projects using modern React patterns, REST APIs, and cloud deployment. ',
    skills: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    type: 'Internship',
  },
]

const BadgeGraduation = () => (
  <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24' aria-hidden='true'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M12 14l9-5-9-5-9 5 9 5z' />
    <path strokeLinecap='round' strokeLinejoin='round' d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
    <path strokeLinecap='round' strokeLinejoin='round' d='M12 14l-6.16 3.422a12.083 12.083 0 01-.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 006.824-2.998 12.078 12.078 0 01-.665-6.479L12 14z' />
  </svg>
)

const BadgeBriefcase = () => (
  <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24' aria-hidden='true'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
  </svg>
)

const BadgeRocket = () => (
  <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24' aria-hidden='true'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' />
  </svg>
)

const typeStyles = {
  Fellowship: { bg: 'var(--color-accent-muted)', color: 'var(--color-accent)', icon: <BadgeGraduation /> },
  Internship: { bg: 'var(--color-success-bg)', color: 'var(--color-success)', icon: <BadgeBriefcase /> },
  Freelance: { bg: 'var(--color-error-bg)', color: 'var(--color-error)', icon: <BadgeRocket /> },
}

function Experience() {
  return (
    <section id='experience' className='section bg-[var(--color-bg)] border-t border-[var(--color-border)]' aria-labelledby='experience-heading'>
      <div className='container'>

        <header className='section-header animate-in'>
          <p className='section-label'>Experience</p>
          <h2 id='experience-heading' className='section-title-md text-balance'>
            Work History
          </h2>
          <p className='section-desc'>
            Professional experiences that shaped my approach to building software.
            Each role taught me something different about craft, collaboration, and impact.
          </p>
        </header>

        <div className='max-w-2xl animate-in animate-in-delay-1'>
          {experiences.map((exp, i) => {
            const style = typeStyles[exp.type] || typeStyles.Fellowship
            return (
              <article
                key={exp.id}
                className='relative group pl-8 md:pl-12 pb-14 last:pb-0 stagger-in'
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Timeline track */}
                <div className='absolute left-[7px] md:left-[11px] top-0 bottom-0 w-px bg-[var(--color-border)]' />
                {/* Dot */}
                <div className='absolute left-0 md:left-[4px] top-[8px] w-3.5 h-3.5 rounded-full bg-[var(--color-bg-elevated)] border-2 border-[var(--color-border)] group-hover:border-accent group-hover:bg-accent transition-all duration-fast z-10' />

                <div className='card-hover p-6 md:p-7 bg-[var(--color-bg-elevated)] border border-[var(--color-border)]'>
                  <div className='flex flex-wrap items-start gap-3 mb-4'>
                    <span className='badge' style={{ backgroundColor: style.bg, color: style.color, borderColor: 'transparent' }}>
                      <span className='flex items-center gap-1.5'>{style.icon}{exp.type}</span>
                    </span>
                    <span className='font-mono text-label text-fg-disabled uppercase self-center ml-auto'>{exp.period}</span>
                  </div>

                  <div className='flex items-baseline gap-3 mb-3'>
                    <h3 className='text-heading-md font-display text-fg'>{exp.role}</h3>
                    <span className='text-body text-fg-subtle'>at</span>
                    <p className='text-body font-medium text-fg-muted'>{exp.company}</p>
                  </div>

                  <p className='flex items-center gap-1.5 text-caption font-mono text-fg-disabled uppercase tracking-wider mb-4'>
                    <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24' aria-hidden='true'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                      <path strokeLinecap='round' strokeLinejoin='round' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                    {exp.location}
                  </p>

                  <p className='text-body text-fg-subtle leading-relaxed mb-5'>{exp.description}</p>

                  <div className='flex flex-wrap gap-2'>
                    {exp.skills.map((skill, j) => (
                      <span
                        key={skill}
                        className='px-2.5 py-1 text-caption font-medium text-fg-subtle bg-[var(--color-bg-muted)] border border-[var(--color-border)] rounded-md
                                 transition-all duration-fast hover:border-accent hover:text-accent hover:bg-[var(--color-accent-muted)]'
                        style={{ animationDelay: `${j * 40}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Experience