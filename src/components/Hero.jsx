import React from 'react'

function Hero() {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center bg-[var(--color-bg-elevated)] overflow-hidden'
      aria-labelledby='hero-heading'
    >
      {/* Dot grid background */}
      <div className='dot-grid' aria-hidden='true' />

      {/* Accent gradient orbs */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden' aria-hidden='true'>
        <div className='absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-10'
          style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
        <div className='absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-3xl opacity-10'
          style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
      </div>

      <div className='section container relative z-10 pt-16 pb-16 md:pt-24 md:pb-24'>
        <div className='grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center'>

          {/* Text content */}
          <div className='animate-in'>
            <p className='section-label'>Designer & Developer</p>
            <h1 id='hero-heading' className='text-display-xl font-display text-fg mb-8 text-balance leading-[0.95]'>
              Kismat<br/>
              <span className='gradient-text-accent'>Poudel</span>
            </h1>
            <p className='text-body-lg text-fg-muted max-w-[38ch] mb-10 leading-relaxed'>
              I build digital experiences that matter,  Web&nbsp;development,
              machine learning, and AI, crafted with precision.
            </p>
            <div className='flex flex-wrap gap-3'>
              <a
                href='#projects'
                className='btn-primary'
              >
                See Work
                <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth={2.5} viewBox='0 0 24 24' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' />
                </svg>
              </a>
              <a
                href='#contact'
                className='btn-secondary'
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Profile card */}
          <div className='hidden md:block animate-in animate-in-delay-1'>
            <div className='relative w-[300px] mx-auto'>
              {/* Decorative frame */}
              <div className='absolute inset-0 rounded-2xl border border-[var(--color-border)] opacity-50' />
              <div className='absolute inset-0 rounded-2xl border border-[var(--color-accent)] opacity-20' style={{ clipPath: 'polygon(0 0, 60px 0, 0 60px)' }} />
              <div className='absolute inset-0 rounded-2xl border border-[var(--color-accent)] opacity-20' style={{ clipPath: 'polygon(100% 100%, calc(100% - 60px) 100%, 100% calc(100% - 60px))' }} />

              {/* Image container */}
              <div className='relative aspect-square overflow-hidden rounded-2xl bg-[var(--color-bg-muted)]'>
                <img
                  src='/images/Image.jpg'
                  alt='Kismat Poudel'
                  className='w-full h-full object-cover grayscale-[15%] transition-transform duration-slower hover:scale-105'
                  loading='eager'
                />
                {/* Subtle overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/30 to-transparent' />
              </div>

              {/* Status badge */}
              <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 w-fit flex items-center gap-2.5 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-4 py-2.5 rounded-full shadow-xl z-10 animate-float'>
                <span className='relative flex items-center justify-center w-5 h-5' aria-hidden='true'>
                  <span className='animate-ping absolute inset-0 rounded-full bg-success opacity-50'/>
                  <span className='relative inline-flex rounded-full w-2 h-2 bg-success animate-pulse'/>
                </span>
                <span className='font-mono text-label text-fg uppercase tracking-wider whitespace-nowrap font-medium'>Available for work</span>
              </div>

              {/* Tech badges */}
              <div className='absolute -top-4 right-4 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-normal'>
                {['React', 'Python', 'ML/AI', 'Node.js'].map((tech, i) => (
                  <span key={tech} className='badge-accent animate-in animate-in-delay-2' style={{ animationDelay: `${300 + i * 60}ms` }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-in animate-in-delay-2' aria-hidden='true'>
        <span className='font-mono text-label text-fg-disabled uppercase tracking-wider'>Scroll</span>
        <div className='relative w-px h-12'>
          <div className='absolute inset-0 bg-gradient-to-b from-[var(--color-border)] to-transparent' />
          <div className='absolute left-1/2 top-0 -translate-x-1/2 w-1 h-1 rounded-full bg-accent animate-pulse' style={{ animationDuration: '1.5s' }} />
        </div>
      </div>
    </section>
  )
}

export default Hero