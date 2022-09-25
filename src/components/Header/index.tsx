import '../../sass/header.scss';
import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import { useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggleMenu = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div className='navbar'>
      <div className='navbar-main'>
        <img src={logo} alt={logo} className='navbar-logo' />
        <div className='navbar-desktop'>
          <a href='#' className='navbar-link'>
            product
          </a>
          <a href='#' className='navbar-link'>
            faq
          </a>
          <a href='#' className='navbar-link'>
            contact
          </a>
        </div>
        <FiMenu className='navbar-mobile' onClick={handleToggleMenu} />
      </div>
      <div className={`sub-menu ${toggle ? 'active' : ''}`}>
        <ul className='sub-menu__container'>
          <li>
            <a href='#' className='navbar-link'>
              home
            </a>
          </li>
          <li>
            <a href='#' className='navbar-link'>
              faq
            </a>
          </li>
          <li>
            <a href='#' className='navbar-link'>
              contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
