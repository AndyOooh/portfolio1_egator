import { BsPatchCheckFill } from 'react-icons/bs';
import { SiGraphql, SiTypescript } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

import { useScrollSpy } from '../../utils/scrollspy';
import SkillsCloud from './SkillsCloud/SkillsCloud';
import './Experience.css';

const Experience = () => {
  useScrollSpy('experience', '#experience');

  const skills = {
    frontend: [
      {
        technology: 'HTML',
        Level: 'Experienced',
      },
      {
        technology: 'CSS',
        Level: 'Experienced',
      },
      {
        technology: 'JavaScript',
        Level: 'Experienced',
      },
      {
        technology: 'ReactJS',
        Level: 'Experienced',
      },
      {
        technology: 'SASS',
        Level: 'Intermediate',
      },
      {
        technology: 'TypeScript',
        Level: 'Beginner',
      },
    ],
    backend: [
      {
        technology: 'NodeJS',
        Level: 'Intermediate',
      },
      {
        technology: 'ExpressJS',
        Level: 'Intermediate',
      },
      {
        technology: 'GraphQL',
        Level: 'Beginner',
      },
      {
        technology: 'MongoDB',
        Level: 'Intermediate',
      },
      {
        technology: 'NextJS',
        Level: 'Beginner',
      },
      {
        technology: 'MySQL',
        Level: 'Beginner',
      },
    ],
  };

  const frontendSkills = skills.frontend.map(skill => {
    return (
      <article className='experience__details' key={skill.technology}>
        <BsPatchCheckFill className='experience__details-icon' />
        <div>
          <h4>{skill.technology}</h4>
          <small className='text-light'>{skill.Level} </small>
        </div>
      </article>
    );
  });

  const backendSkills = skills.backend.map(skill => {
    return (
      <article className='experience__details' key={skill.technology}>
        <BsPatchCheckFill className='experience__details-icon' />
        <div>
          <h4>{skill.technology}</h4>
          <small className='text-light'>{skill.Level} </small>
        </div>
      </article>
    );
  });

  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend</h3>
          <div className='experience__content'>{frontendSkills}</div>
        </div>
        <div className='experience__backend'>
          <h3>Backend</h3>
          <div className='experience__content'>{backendSkills}</div>
        </div>
      </div>

      <div className='container experience__current'>
        <h4 className='h4'>I'm currently learning</h4>
        <div className='experience__logos'>
          <div className='experience__current__item'>
            <SiTypescript className='experience__logo' color='#2D79C6' />
            <h6>TypeScript</h6>
          </div>
          <div className='experience__current__item'>
            <FaAws className='experience__logo' color='#F19122' />
            <h6>Amazon Web Services</h6>
          </div>
          <div className='experience__current__item'>
            <SiGraphql className='experience__logo' color='#D932A1' />
            <h6>GrapQL</h6>
          </div>
        </div>
      </div>
      <div className='container experience__cloud'>
        <h4 className='h4'>Technologies I've had my hands on</h4>
        <SkillsCloud />
      </div>
    </section>
  );
};
export default Experience;
