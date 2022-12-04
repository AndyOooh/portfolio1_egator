import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine, RiLinkedinBoxLine } from 'react-icons/ri';
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs';

import { useScrollSpy } from '../../utils/scrollspy';
import './Contact.css';

const Contact = () => {
  useScrollSpy('contact', '#contact');
  const formRef = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm('service_7q1a9mv', 'template_47peddn', formRef.current, 'LL9E8AmuqFeA3Cr7P')
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const contactsArray = [
    {
      media: 'Email',
      icon: <MdOutlineEmail className='contact__option-icon' />,
      h5: 'andy.oeee@gmail.com',
      link: 'mailto:dummy@dummy.com',
    },
    {
      media: 'LinkedIn',
      icon: <RiLinkedinBoxLine className='contact__option-icon' />,
      h5: 'andreas oee',
      link: 'https://www.linkedin.com/in/andreas-oee/',
    },
    {
      media: 'WhatsApp',
      icon: <BsWhatsapp className='contact__option-icon' />,
      h5: '+66634920201',
      link: 'https://wa.me/66634920201',
    },
  ];

  const contacts = contactsArray.map(({ media, icon, h5, link }, index) => {
    return (
      <article className='contact__option' key={index}>
        {icon}
        <h4>{media}</h4>
        <h5>{h5}</h5>
        <a href={link} target='_blank'>
          Send a message
        </a>
      </article>
    );
  });

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>{contacts}</div>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
