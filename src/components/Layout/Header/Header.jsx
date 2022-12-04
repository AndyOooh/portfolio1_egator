import Me from '../../../assets/myImages/profile-transparent.png';
import { useScrollSpy } from '../../../utils/scrollspy';
import CTA from './CTA';
import './Header.css';
import HeaderSocials from './HeaderSocials';

const Header = ({ textEnter, textleave }) => {
  useScrollSpy('home', '#');

  return (
    <header id='home'>
      <div className='container header__container'>
        <div>
          <h5>Hi, my name is</h5>
          <h1
            // onMouseEnter={textEnter}
            //  onMouseLeave={textleave}
            className='my-name'>
            Andreas Oee
          </h1>
          <h5 className='text-light'>
            <span className='full-stack'>Full stack</span> developer
          </h5>
          <CTA />
        </div>
        <div className='down'>
          <HeaderSocials />
          <div className='me'></div>
          <div className='down__vertical__elements scroll__down'>
            <a href='#contact' className='scroll__down__text'>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
