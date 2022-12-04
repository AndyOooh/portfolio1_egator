import './nav.css';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
  AiOutlineMessage,
} from 'react-icons/ai';
import {  RiAwardLine } from 'react-icons/ri';
import { NavHashLink } from 'react-router-hash-link';

const Nav = () => {
  const sectionLinks = [
    { name: '#about', icon: <AiOutlineUser /> },
    { name: '#experience', icon: <RiAwardLine /> },
    { name: '#portfolio', icon: <AiOutlineFolderOpen /> },
    { name: '#contact', icon: <AiOutlineMessage /> },
  ];

  const menu = sectionLinks.map(link => {
    return (
      <NavHashLink
        smooth
        to={link.name}
        className={() => (window.location.hash === link.name ? 'active' : '')}
        key={link.name}
      >
        {link.icon}
      </NavHashLink>
    );
  });

  return (
    <>
      <nav>
        <NavHashLink smooth to='/#' className={() => (window.location.hash === '' ? 'active' : '')}>
          <AiOutlineHome />
        </NavHashLink>
        {menu}
      </nav>
    </>
  );
};
export default Nav;
