import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';


const HeaderSocials = () => {
  return (
    <div className='header__socials down__vertical__elements'>
      <a href='https://github.com/AndyOooh' target='_blank' rel='noreferrer'>
        <BsGithub />
      </a>
      <a href='https://www.linkedin.com/in/andreas-oee/' target='_blank' rel='noreferrer'>
        <BsLinkedin />
      </a>
      <a href='https://stackoverflow.com/users/12930072/andyoh' target='_blank' rel='noreferrer'>
        <BsStackOverflow />
      </a>
    </div>
  );
};
export default HeaderSocials;
