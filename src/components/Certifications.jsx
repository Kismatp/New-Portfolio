import React from 'react'

const certifications = [
  { title: 'Data Science with Python', issuer: '', year: '2025', icon: 'chart' },
  { title: 'Deep Learning with Python', issuer: '', year: '2025', icon: 'brain' },
  { title: 'AI for Beginners', issuer: 'Microsoft', year: '2025', icon: 'sparkles' },
  { title: 'Cybersecurity Awareness', issuer: 'Microsoft', year: '2025', icon: 'shield' },
]

const IconChart = () => (
  <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' aria-hidden='true'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
  </svg>
)

const IconBrain = () => (
  <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' aria-hidden='true'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
  </svg>
)

const IconSparkles = () => (
  <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' aria-hidden='true'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M5 3v4M3 5h4M16 3v4m4 0h-4m0 16v4m0-4h4m-16 0h4m8-13a4 4 0 11-8 0 4 4 0 018 0z' />
  </svg>
)

const IconShield = () => (
  <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' aria-hidden='true'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
  </svg>
)

function Certifications() {
  const iconMap = {
    chart: <IconChart />,
    brain: <IconBrain />,
    sparkles: <IconSparkles />,
    shield: <IconShield />,
  }

  return (
    <section id='certifications' className='section-sm bg-[var(--color-bg)] border-t border-[var(--color-border)]' aria-labelledby='certifications-heading'>
      <div className='container'>

        <header className='section-header animate-in'>
          <p className='section-label'>Credentials</p>
          <h2 id='certifications-heading' className='section-title-md text-balance'>
            Certifications
          </h2>
          <p className='section-desc'>
            Continuous learning is core to my practice. These represent recent deep-dives
            into data science, machine learning, and security fundamentals.
          </p>
        </header>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in animate-in-delay-1'>
          {certifications.map((cert, i) => (
            <article
              key={i}
              className='card card-hover p-6 stagger-in relative overflow-hidden'
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Accent line */}
              <div className='absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent' />
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-xl bg-[var(--color-accent-muted)] flex items-center justify-center flex-shrink-0' aria-hidden='true'>
                  {iconMap[cert.icon]}
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='font-mono text-label text-fg-disabled uppercase mb-2'>{cert.year}</p>
                  <h3 className='text-body font-semibold text-fg leading-snug mb-1'>{cert.title}</h3>
                  <p className='text-caption text-fg-subtle'>{cert.issuer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Certifications