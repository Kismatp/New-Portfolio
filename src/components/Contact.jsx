import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [msg, setMsg] = useState('')

  const send = async (e) => {
    e.preventDefault()
    setMsg('Sending...')

    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: 'service_6ac5ebc',
        template_id: 'template_6zd1o4b',
        user_id: 'a5lHqh3r1GcfPDmCM',
        template_params: { from_name: form.name, from_email: form.email, message: form.message }
      })
    })

    if (res.ok) {
      setMsg('✓ Message sent!')
      setForm({ name: '', email: '', message: '' })
    } else {
      setMsg('✗ Failed to send. Try again.')
    }
  }

  return (
    <section id='contact' className='py-20 px-6 bg-gray-50 dark:bg-gray-950'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center'>
          Contact Me
        </h2>

        <div className='grid md:grid-cols-2 gap-12 items-start'>
          <div>
            <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>Get In Touch</h3>
            <p className='text-gray-600 dark:text-gray-300 mb-8 leading-relaxed'>
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>

            <div className='space-y-4'>
              <a
                href='mailto:your@email.com'
                className='flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-300 transition-all hover:shadow-md'
              >
                <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-xl'>📧</div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Email</p>
                  <p className='text-gray-900 dark:text-white'>your@email.com</p>
                </div>
              </a>

              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-300 transition-all hover:shadow-md'
              >
                <div className='w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-xl'>🐙</div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>GitHub</p>
                  <p className='text-gray-900 dark:text-white'>github.com/yourusername</p>
                </div>
              </a>

              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-300 transition-all hover:shadow-md'
              >
                <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-xl'>💼</div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>LinkedIn</p>
                  <p className='text-gray-900 dark:text-white'>linkedin.com/in/yourusername</p>
                </div>
              </a>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 md:p-8'>
            <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>Send a Message</h3>

            <form onSubmit={send} className='space-y-4'>
              <input
                name='name'
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder='Your Name'
                required
                className='w-full p-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400'
              />
              <input
                name='email'
                type='email'
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder='Your Email'
                required
                className='w-full p-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400'
              />
              <textarea
                name='message'
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder='Your Message'
                rows={4}
                required
                className='w-full p-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-gray-900 dark:text-white placeholder-gray-400'
              />
              <button type='submit' className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition'>
                Send Message
              </button>
              {msg && <p className='text-center text-sm'>{msg}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact