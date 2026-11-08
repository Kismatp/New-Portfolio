import React from 'react'

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL'] },
  { category: 'AI/ML', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'OpenCV'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Vercel', 'AWS', 'Figma'] },
]

const stats = [
  { value: '2+', label: 'Years Learning' },
  { value: '8+', label: 'Projects Shipped' },
  { value: '12+', label: 'Technologies' },
]

function About() {
  return (
    <section id='about' className='section bg-[var(--color-bg)] border-t border-[var(--color-border)]' aria-labelledby='about-heading'>
      <div className='container'>

        <header className='section-header animate-in'>
          <p className='section-label'>About</p>
          <h2 id='about-heading' className='section-title text-balance'>
            Building things<br/>that matter.
          </h2>
          <p className='section-desc'>
            I&apos;m a computer engineering student passionate about creating meaningful digital experiences.
            I work across the full stack &mdash; from polished interfaces to machine learning pipelines &mdash;
            and care deeply about the craft in both.
          </p>
        </header>

        <div className='grid md:grid-cols-[280px_1fr] gap-12 md:gap-20 items-start'>

          {/* Image & Stats */}
          <div className='animate-in'>
            <div className='relative'>
              <div className='aspect-square overflow-hidden bg-[var(--color-bg-muted)] rounded-2xl'>
                <img
                  src='/images/Image.jpg'
                  alt='Kismat Poudel working'
                  className='w-full h-full object-cover transition-transform duration-slower hover:scale-[1.02]'
                />
              </div>

              {/* Floating accent element */}
              <div className='absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-[var(--color-accent-light)] border border-[var(--color-accent)]/30 rotate-3' aria-hidden='true' />
            </div>

            {/* Stats card - below image */}
            <div className='mt-6 max-w-xs mx-auto glass px-5 py-4 rounded-xl shadow-lg stagger-in'>
              {stats.map((stat, i) => (
                <div key={stat.label} className='flex items-center justify-between'>
                  <div>
                    <p className='text-display-sm font-display text-fg'>{stat.value}</p>
                    <p className='text-caption text-fg-disabled uppercase tracking-wider'>{stat.label}</p>
                  </div>
                  {i < stats.length - 1 && <div className='w-px h-8 bg-[var(--color-border)] mx-4' />}
                </div>
              ))}
            </div>

            <p className='mt-4 font-mono text-label text-fg-disabled uppercase tracking-wider text-center'>
              Computer Engineering Student
            </p>
          </div>

          {/* Content */}
          <div className='animate-in animate-in-delay-1 space-y-10'>
            <div className='prose max-w-none'>
              <p className='text-body-lg text-fg-muted leading-relaxed mb-6'>
                Every project is an opportunity to solve real problems. I believe great software
                should be intuitive, performant, and genuinely delightful to use.
              </p>
              <p className='text-body text-fg-subtle leading-relaxed'>
                Currently exploring the intersection of AI and user experience &mdash; building tools
                that augment human creativity rather than replace it. When I&apos;m not coding, you&apos;ll
                find me reading about systems design, experimenting with new frameworks, or
                contributing to open source.
              </p>
            </div>

            {/* Skills by category */}
            <div>
              <p className='section-label mb-6'>Skills</p>
              <div className='space-y-8'>
                {skills.map((group, i) => (
                  <div key={group.category} className='card-hover group stagger-in' style={{ animationDelay: `${i * 80}ms` }}>
                    <div className='flex items-center justify-between gap-4'>
                      <h3 className='text-heading-md font-display text-fg'>{group.category}</h3>
                      <span className='text-caption font-mono text-fg-disabled uppercase'>{group.items.length}</span>
                    </div>
                    <div className='flex flex-wrap gap-2 mt-4'>
                      {group.items.map((skill, j) => (
                        <span
                          key={skill}
                          className='px-3 py-1.5 text-caption font-medium text-fg-subtle bg-[var(--color-bg-muted)] border border-[var(--color-border)] rounded-md
                                   transition-all duration-fast hover:border-accent hover:text-accent hover:bg-[var(--color-accent-muted)]'
                          style={{ animationDelay: `${j * 40}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className='flex flex-wrap gap-3 pt-4 border-t border-[var(--color-border)] stagger-in'>
              <a href='#contact' className='btn-primary'>
                Let&apos;s work together
                <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth={2.5} viewBox='0 0 24 24' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' />
                </svg>
              </a>
              <a href='/CV_Kismat_Poudel.pdf' download className='btn-secondary'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' />
                </svg>
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About