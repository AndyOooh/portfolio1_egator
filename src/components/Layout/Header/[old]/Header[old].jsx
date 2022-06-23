import Me from '../../../assets/myImages/profile-transparent.png';
import { useScrollSpy } from '../../../../utils/scrollspy';
import CTA from '../CTA';
import './Header.css';
import HeaderSocials from '../HeaderSocials';

const Header = () => {
  useScrollSpy('home', '#');

  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Andy Ohhh</h1>
        <h5 className='text-light'>Full stack developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          {/* <img src={Me} alt='' /> */}
          <div className='img'></div>
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};
export default Header;
