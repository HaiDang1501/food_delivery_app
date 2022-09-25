import '../../sass/footer.scss';
import logo from '../../assets/logo.png';
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer'>
      <a href='#'>
        <img src={logo} alt={logo} className='footer-img' />
      </a>
      <div className='footer-more'>
        <a href='#' className='footer-more__item'>
          <AiOutlineTwitter />
        </a>
        <a href='#' className='footer-more__item'>
          <AiFillFacebook />
        </a>
        <a href='#' className='footer-more__item item-desktop'>
          <AiFillInstagram />
        </a>
        <a href='#' className='footer-more__item item-mobile'>
          <AiFillLinkedin />
        </a>
      </div>
      <p className='footer-cr__desktop'>Copyright 2020 Bella Onojie.com</p>
      <p className='footer-cr__mobile'>
        Just type what's on your mind and we'll{' '}
      </p>
    </div>
  );
};

export default Footer;
