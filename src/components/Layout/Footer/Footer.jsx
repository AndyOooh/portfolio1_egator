import { SiCodewars, SiCodesandbox, SiFreecodecamp } from 'react-icons/si';
import { BsLinkedin, BsGithub, BsStackOverflow } from 'react-icons/bs';

import './Footer.jsx.css';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        AndyOh
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contacts'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://github.com/AndyOooh' target='_blank' rel='noreferrer'>
          <BsGithub />
        </a>
        <a href='https://stackoverflow.com/users/12930072/andyoh' target='_blank' rel='noreferrer'>
          <BsStackOverflow />
        </a>
        <a href='https://www.codewars.com/users/AndyOooh' target='_blank' rel='noreferrer'>
          <SiCodewars />
        </a>
        <a href='https://codesandbox.io/u/AndyOooh' target='_blank' rel='noreferrer'>
          <SiCodesandbox />
        </a>
        <a href='https://www.linkedin.com/in/andreas-oee' target='_blank' rel='noreferrer'>
          <BsLinkedin />
        </a>
        <a href='https://www.freecodecamp.org/andy_ohhh' target='_blank' rel='noreferrer'>
          <SiFreecodecamp />
        </a>
        
      </div>

      <div className='footer__copyright'>
        <small>&copy; 2022 Andreas Oee</small>
      </div>
    </footer>
  );
};
export default Footer;
