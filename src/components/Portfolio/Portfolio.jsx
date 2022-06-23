import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Img1 from '../../assets/images/portfolio1.jpg';
import Img2 from '../../assets/images/portfolio2.jpg';
import Img3 from '../../assets/images/portfolio3.jpg';
import Img4 from '../../assets/images/portfolio4.jpg';
import Img5 from '../../assets/images/portfolio5.png';
import Img6 from '../../assets/images/portfolio6.jpg';

import './Portfolio.css';

const Portfolio = () => {
  const portfolioArray = [
    {
      id: 1,
      image: Img1,
      title: 'portf item 1',
      gitHub: 'https://github.com/AndyOooh/portfolio',
      liveDemo: 'https://dribbble.com/Alien_pixels',
    },
    {
      id: 2,
      image: Img2,
      title: 'portf item 2',
      gitHub: 'https://github.com/AndyOooh/portfolio',
      liveDemo: 'https://dribbble.com/Alien_pixels',
    },
    {
      id: 3,
      image: Img3,
      title: 'portf item 3',
      gitHub: 'https://github.com/AndyOooh/portfolio',
      liveDemo: 'https://dribbble.com/Alien_pixels',
    },
    {
      id: 4,
      image: Img4,
      title: 'portf item 4',
      gitHub: 'https://github.com/AndyOooh/portfolio',
      liveDemo: 'https://dribbble.com/Alien_pixels',
    },
    {
      id: 5,
      image: Img5,
      title: 'portf item 5',
      gitHub: 'https://github.com/AndyOooh/portfolio',
      liveDemo: 'https://dribbble.com/Alien_pixels',
    },
    {
      id: 6,
      image: Img6,
      title: 'portf item 6',
      gitHub: 'https://github.com/AndyOooh/portfolio',
      liveDemo: 'https://dribbble.com/Alien_pixels',
    },
  ];

  const portfolio = portfolioArray.map(proj => {
    return (
      <article className='portfolio__item' key={proj.id}>
        <img className='portfolio__item-image' src={proj.image} alt='' />
        <h3>{proj.title}</h3>
        <div className='portfolio__item-cta'>
          <a className='btn' href={proj.gitHub} target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
          <a
            className='btn btn-primary'
            href={proj.liveDemo}
            target='_blank'
            rel='noopener noreferrer'
          >
            Live Demo
          </a>
        </div>
      </article>
    );
  });

  return (
    <>
      <section id='portfolio'>
        <h5>Projects I Have Created</h5>
        <h2>Portfolio</h2>
        <div className='container portfolio__container'>{portfolio}</div>
      </section>
    </>
  );
};
export default Portfolio;
