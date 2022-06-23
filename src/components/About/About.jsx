import { FaAward, FaUsers } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import { NavHashLink } from 'react-router-hash-link';

import Kayak from '../../assets/myImages/kayak.jpg';
import { useScrollSpy } from '../../utils/scrollspy';
import './About.css';

const About = () => {
  useScrollSpy('about', '#about');

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>2+ years</small>
          </article>
          <article className='about__card'>
            <FaUsers className='about__icon' />
            <h5>Clients</h5>
            <small>10+</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>20+ </small>
          </article>
        </div>

        <div className='about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={Kayak} alt='about' />
            </div>
          </div>

          <div className='about__content'>
            <p className='about__text'>
              <span>Hello!</span> I'm Andreas, or <span>Andy</span> as the domain says. <br />
              <br />
              From Denmark but relocated to buzzling <span>Bangkok</span> some years ago, I now feel
              at home in the 'big mango' with my <span>girlfriend</span> and the international
              community I'm a part of. <br />
              <br />
              <span>My interest</span> in web development began in <span>2020</span> when I
              couldn't find the tools I needed for my <span>crypto</span> projects. After playing
              around with different APIs in the backend, the frontend quickly caught my interest as
              well. <br /> <br />
              <span>Fast-forward</span> to today, and I’ve completed dozens of courses, personal
              projects and a few collaborations. My main focus these days is the <span>MERN</span>{' '}
              stack and <span>AWS</span>. <br />
              <br />
              Scroll down to{' '}
              <NavHashLink to='#experience' className=''>
                My Experience
              </NavHashLink>{' '}
              to check out my skills or
            </p>

            <NavHashLink to='#contact' className='btn btn-primary'>
              Let's Talk
            </NavHashLink>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
