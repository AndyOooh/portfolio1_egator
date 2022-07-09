import { useState, useRef } from 'react';

import ReactPlayer from 'react-player/lazy';
import Slider from 'react-slick';

import ReduxbookVid from '../../assets/myVideos/Reduxbook.mp4';
import FamebookVid from '../../assets/myVideos/Famebook.mp4';
import AndyxyzImage from '../../assets/myImages/anydoxyz.png';

import Img1 from '../../assets/images/portfolio1.jpg';
import Img2 from '../../assets/images/portfolio2.jpg';
import './Portfolio copy.css';

const Portfolio = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 1500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  };

  const portfolioArray = [
    {
      video: ReduxbookVid,
      title: 'Redux course project',
      gitHub: 'https://github.com/AndyOooh/redux-essentials',
      liveDemo: 'https://redux-essentials-course.web.app/',
      type: 'Frontend + Firebase BaaS',
      technologies: 'React Redux Firebase',
    },
    {
      // image: Img1,
      video: FamebookVid,
      title: 'Social media app',
      gitHub: 'https://github.com/AndyOooh/famebook-backend',
      liveDemo: 'https://www.connectwithfriends.sbs/',
      type: 'Full Stack',
      technologies: 'NodeJS React ExpressJS MongoDB AWS NGINX',
      // tags: ['NodeJS', 'React', 'ExpressJS', 'MongoDB', 'AWS', 'NGINX'],
    },

    {
      image: AndyxyzImage,
      title: 'Portfolio website',
      gitHub: 'https://github.com/AndyOooh/portfolio1_egator',
      liveDemo: 'https://www.andyo.xyz/',
      type: 'Frontend',
      technologies: 'React css AWS react-slick',
    },
    {
      image: Img1,
      title: 'portf item 3',
      gitHub: 'https://github.com/AndyOooh/portfolio',
      liveDemo: 'https://dribbble.com/Alien_pixels',
      type: 'Full Stack',
      technologies: 'NodeJS React ExpressJS MongoDB AWS NGINX',
    },
  ];

  const portfolio = portfolioArray.map((proj, id) => {
    return (
      <article
        key={id}
        className={
          id === imageIndex ? 'portfolio__item activeSlide' : 'inactiveslide portfolio__item'
        }
        onClick={() => sliderRef.current.slickGoTo(id)}>
        {proj.video ? (
          <ReactPlayer
            url={proj.video}
            className='portfolio__item-image'
            loop={true}
            width='100%'
            height='100%'
            muted={true}
            playing={true}
          />
        ) : (
          // <img className='portfolio__item-image' src={proj.image} alt='' />
          <div
            className='portfolio__item-image'
            style={{
              backgroundImage: `url(${proj.image})`,
            }}></div>
        )}
        <div className='proj-title-type'>
          <h3>{proj.title}</h3>
          <h6>{proj.type}</h6>
        </div>
        {proj.tags
          ? proj.tags.map((tag, id) => (
              <p className='tag' key={id}>
                {tag}
              </p>
            ))
          : null}
        {proj.technologies ? <p className='tech-stack'>{proj.technologies}</p> : null}

        <div className='portfolio__item-cta'>
          <a className='btn' href={proj.gitHub} target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
          <a
            className='btn btn-primary'
            href={proj.liveDemo}
            target='_blank'
            rel='noopener noreferrer'>
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
        <Slider ref={sliderRef} {...settings}>
          {portfolio}
        </Slider>
      </section>
    </>
  );
};
export default Portfolio;
