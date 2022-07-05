// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Anders1Img from '../../assets/myImages/anders.jpg';
import Kasper1Img from '../../assets/myImages/kasper1.png';
import Img1 from '../../assets/images/avatar1.jpg';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsArray = [
    {
      image: Kasper1Img,
      altText: 'kasper',
      name: 'Kasper Dam',
      job: '- CEO, Kandio.io',
      text2: "Andreas never delivers sub-optimal work. He's efficient and adapts quickly",
      text: 'I’ve known Andreas since 2017, and have been fortunate to enjoy his reliable and consistent demeanor in both business and private. Andreas is the kind of person who is never late, delivers on time, and asks when in doubt.',
    },
    {
      image: Anders1Img,
      altText: 'Anders Ethnophere',
      name: 'Anders Klostergaard',
      job: 'CEO, Ethnophere CO. Ltd.',
      text: 'Andreas is self-motivated, attentive to detail, and skilled at both independent and collaborative work',
    },
    // {
    //   image: Img3,
    //   altText: 'avatar three',
    //   job: 'CEO, Kandio.io',
    //   name: 'Ernest Achiever',
    //   text: 'Molestias explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias explicabo',
    // },
    // {
    //   image: Img4,
    //   altText: 'avatar four',
    //   job: 'CEO, Kandio.io',
    //   name: 'Ernest Achiever',
    //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias explicabo',
    // },
  ];

  const testimonials = testimonialsArray.map(({ image, altText, job, name, text }, index) => {
    return (
      <SwiperSlide className='testimonial' key={index}>
        <div className='client__avatar'>
          <img src={image} alt={altText} />
        </div>
        <h5 className='client__name'>
          {name} <span>{job}</span>
        </h5>

        <small className='client__review'>{`" ${text} "`}</small>
      </SwiperSlide>
    );
  });

  return (
    <section id='testimonials'>
      <h5>What Other People Say</h5>
      <h2>Testimonials</h2>
      <Swiper
        className='container testimonials__container'
        // modules={[Navigation, Pagination, Scrollbar, A11y]}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={swiper => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {testimonials}
      </Swiper>
      {/* <div className='container testimonials__container'> */}
      {/* </div> */}
    </section>
  );
};
export default Testimonials;
