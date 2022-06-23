import { BiCheck } from 'react-icons/bi';

import { useScrollSpy } from '../../utils/scrollspy';
import './Services.css';

const Services = () => {
  useScrollSpy('services', '#services');

  const servicesArray = [
    {
      category: 'UI/UX Design',
      services: [
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          text: 'ipsum Lorem  dolor sit amet consectetur adipisicing elit.',
        },
      ],
    },
    {
      category: 'Web Development',
      services: [
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          text: 'dolor Lorem ipsum  sit amet consectetur adipisicing elit.',
        },
      ],
    },
    {
      category: 'Content Creation',
      services: [
        {
          text: 'adipisicing Lorem ipsum dolor sit amet consectetur  elit.',
        },
        {
          text: 'dolor Lorem ipsum  sit amet consectetur adipisicing elit.',
        },
      ],
    },
  ];

  const services = servicesArray.map(s => {
    return (
      <article className='service' key={s.category}>
        <div className='service__head'>
          <h3>{s.category}</h3>
        </div>
        <ul className='service__list'>
          {s.services.map(serv => {
            return (
              <li key={serv.text}>
                <BiCheck className='service__list-icon' />
                <p>{serv.text}</p>
              </li>
            );
          })}
        </ul>
      </article>
    );
  });

  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <h5>What I Offer</h5>
      <div className='container services__container'>{services}</div>
    </section>
  );
};
export default Services;
