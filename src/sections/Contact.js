import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_l0l5v3q',
      'template_6huci6b',
      form.current,
      'aYjju7dOXUuWFJ70z'
    )
      .then((result) => {
        console.log(result.text);
        alert("Message sent!");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed: " + error.text);
      });
  };

  return (
    <section id="contact" className={`min-h-screen py-12 px-4 sm:px-8 lg:px-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8">
          Let's Connect!
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
          Tertarik bekerja sama atau sekedar ngobrol? Jangan ragu untuk menghubungi saya!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { name: '📧 Email', link: 'mailto:widyadharta@gmail.com', color: 'hover:shadow-cyan-500/30' },
            { name: '🔗 LinkedIn', link: 'https://www.linkedin.com/in/pedro-widyadharta-773209350/', color: 'hover:shadow-blue-500/30' },
            { name: '🐱 GitHub', link: 'https://github.com/edrzvena', color: 'hover:shadow-purple-500/30' },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'bg-white bg-opacity-10' : 'bg-gray-800 bg-opacity-10'} backdrop-blur-lg border ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-300'} rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-base font-semibold transition-all duration-300 hover:scale-105 ${item.color}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className={`mt-8 ${isDarkMode ? 'bg-white bg-opacity-10' : 'bg-gray-800 bg-opacity-10'} backdrop-blur-lg rounded-lg border ${isDarkMode ? 'border-white border-opacity-20' : 'border-gray-300'} p-6 max-w-2xl mx-auto`}>
          <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Send me a message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className={`${isDarkMode ? 'bg-black bg-opacity-30 border-white border-opacity-20' : 'bg-white border-gray-300'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 text-sm sm:text-base`}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className={`${isDarkMode ? 'bg-black bg-opacity-30 border-white border-opacity-20' : 'bg-white border-gray-300'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 text-sm sm:text-base`}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className={`w-full ${isDarkMode ? 'bg-black bg-opacity-30 border-white border-opacity-20' : 'bg-white border-gray-300'} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 text-sm sm:text-base`}
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
