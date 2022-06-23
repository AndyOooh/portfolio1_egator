import CV from '../../../assets/Andreas Oee Resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>
        Downlad CV
      </a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  );
};
export default CTA;
