import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';

const socials = [
  { name: 'Email', Icon: FiMail, link: 'mailto:widyadharta@gmail.com' },
  { name: 'LinkedIn', Icon: FiLinkedin, link: 'https://www.linkedin.com/in/pedro-widyadharta-ciady-773209350' },
  { name: 'GitHub', Icon: FiGithub, link: 'https://github.com/edrzvena' },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_l0l5v3q',
      'template_6huci6b',
      form.current,
      'aYjju7dOXUuWFJ70z'
    )
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const inputClass = "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted transition-all duration-200 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10 sm:text-base";

  return (
    <section id="contact" className="bg-band py-24 px-4 sm:px-8 lg:px-16">
      <Reveal className="mx-auto max-w-5xl text-center">
        <p className="mb-3 font-mono text-sm text-accent">{'// contact'}</p>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-ink">
          Get in Touch
        </h2>
        <p className="mb-10 text-lg text-muted">
          Tertarik bekerja sama atau sekedar ngobrol? Jangan ragu untuk menghubungi saya!
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {socials.map(({ name, Icon, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:border-line-strong hover:shadow-air sm:text-base"
            >
              <Icon className="h-4 w-4 text-accent" />
              {name}
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-line bg-white p-6 text-left shadow-air">
          <h3 className="mb-6 text-xl font-semibold text-ink">Send me a message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className={inputClass}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className={inputClass}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className={inputClass}
            ></textarea>
            <Button type="submit" disabled={status === 'sending'} className="w-full px-8 py-3 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </Button>

            {status === 'success' && (
              <p className="text-sm font-medium text-emerald-600">
                Pesan terkirim, makasih! Gw bakal bales secepatnya.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm font-medium text-red-600">
                Gagal kirim. Coba lagi, atau email langsung ke widyadharta@gmail.com.
              </p>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
