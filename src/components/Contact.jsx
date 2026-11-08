import React, { useState } from 'react'

const contactLinks = [
  { label: 'Email', value: 'Kismatpaudel11@gmail.com', href: 'mailto:Kismatpaudel11@gmail.com', icon: 'mail' },
  { label: 'GitHub', value: 'github.com/Kismatp', href: 'https://github.com/Kismatp', external: true, icon: 'github' },
  { label: 'LinkedIn', value: 'linkedin.com/in/kismat-poudel', href: 'https://www.linkedin.com/in/kismat-poudel-a63134284/', external: true, icon: 'linkedin' },
]

const IconMail = () => (
  <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' aria-hidden='true'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
  </svg>
)

const IconGithub = () => (
  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
    <path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
  </svg>
)

const IconLinkedIn = () => (
  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
  </svg>
)

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const send = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus('')
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_6ac5ebc',
          template_id: 'template_6zd1o4b',
          user_id: 'a5lHqh3r1GcfPDmCM',
          template_params: { ...form, time: new Date().toLocaleString() },
        }),
      })
      if (res.ok) {
        setStatus('ok')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('err')
      }
    } catch {
      setStatus('err')
    } finally {
      setSending(false)
    }
  }

  const iconMap = {
    mail: <IconMail />,
    github: <IconGithub />,
    linkedin: <IconLinkedIn />,
  }

  return (
    <section id='contact' className='section bg-[var(--color-bg)] border-t border-[var(--color-border)]' aria-labelledby='contact-heading'>
      <div className='container'>

        <header className='section-header animate-in'>
          <p className='section-label'>Contact</p>
          <h2 id='contact-heading' className='section-title text-balance'>
            Let&apos;s build<br/>something great.
          </h2>
          <p className='section-desc'>
            Open to internship opportunities, collaborations, and interesting projects.
            Drop me a message &mdash; I respond to every inquiry personally.
          </p>
        </header>

        <div className='grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start'>

          {/* Left - Contact info */}
          <div className='animate-in space-y-8'>
            <div className='card p-6 md:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)]'>
              <p className='text-body text-fg-muted leading-relaxed'>
                Whether you have a project in mind, want to collaborate, or just want to say hello,
                I&apos;d love to hear from you. I typically respond within 24 hours.
              </p>
            </div>

            <div className='space-y-5 stagger-in'>
              {contactLinks.map(({ label, value, href, external, icon }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className='flex items-center gap-4 p-4 card-hover bg-[var(--color-bg-elevated)] border border-[var(--color-border)] group'
                >
                  <span className='w-12 h-12 rounded-xl bg-[var(--color-bg-muted)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-accent-muted)] transition-colors duration-fast' aria-hidden='true'>
                    {iconMap[icon]}
                  </span>
                  <div className='flex-1 min-w-0'>
                    <p className='font-mono text-label text-fg-disabled uppercase'>{label}</p>
                    <p className='text-body font-medium text-fg truncate group-hover:text-accent transition-colors duration-fast'>{value}</p>
                  </div>
                  <svg className='w-4 h-4 text-fg-disabled group-hover:text-fg transition-colors duration-fast flex-shrink-0' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24' aria-hidden='true'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                  </svg>
                </a>
              ))}
            </div>

            {/* Social proof / availability */}
            <div className='p-4 bg-[var(--color-accent-muted)] border border-[var(--color-accent)]/30 rounded-xl'>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-success animate-ping' aria-hidden='true' />
                <span className='font-mono text-label text-accent uppercase tracking-wider'>Currently available for freelance & internships</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className='animate-in animate-in-delay-1'>
            <form onSubmit={send} className='card p-6 md:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] space-y-5' noValidate>
              <div className='grid sm:grid-cols-2 gap-4'>
                <div className='form-group'>
                  <label htmlFor='name' className='label'>Name</label>
                  <input
                    type='text'
                    id='name'
                    placeholder='Your name'
                    value={form.name}
                    onChange={set('name')}
                    required
                    className='input'
                    autoComplete='name'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email' className='label'>Email</label>
                  <input
                    type='email'
                    id='email'
                    placeholder='your@email.com'
                    value={form.email}
                    onChange={set('email')}
                    required
                    className='input'
                    autoComplete='email'
                  />
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor='message' className='label'>Message</label>
                <textarea
                  id='message'
                  placeholder="What&apos;s on your mind?"
                  value={form.message}
                  onChange={set('message')}
                  rows={5}
                  required
                  className='textarea'
                />
                <p className='form-hint'>I read every message personally &mdash; no bots, no auto-replies.</p>
              </div>

              <button
                type='submit'
                disabled={sending}
                className='btn-primary w-full sm:w-auto justify-center gap-2'
              >
                {sending ? (
                  <>
                    <svg className='w-4 h-4 animate-spin' fill='none' stroke='currentColor' strokeWidth={2.5} viewBox='0 0 24 24' aria-hidden='true'>
                      <path strokeLinecap='round' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
                    </svg>
                    Sending&hellip;
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth={2.5} viewBox='0 0 24 24' aria-hidden='true'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                    </svg>
                  </>
                )}
              </button>

              {status === 'ok' && (
                <p className='text-center text-sm font-medium text-success bg-[var(--color-success-bg)] border border-success/30 px-4 py-3 rounded-md animate-in' role='status'>
                  Message sent successfully! I&apos;ll be in touch soon.
                </p>
              )}
              {status === 'err' && (
                <p className='text-center text-sm font-medium text-error bg-[var(--color-error-bg)] border border-error/30 px-4 py-3 rounded-md animate-in' role='alert'>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact