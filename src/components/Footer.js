import React from 'react';
import '../design/Footer.css';
import { HashLink as Link} from 'react-router-hash-link';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper' >
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it doesn't work</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className="">
            <img src="images/logo-cut.png" alt ="Picto.design" className="logoimg"/>
          <Link to="#home" smooth className="social-logo">picto.design</Link>
            <div className='footer-logo'>
            </div>
          </div>
            
          <small className='website-rights'>Maks Rogelj, Picto © 2021</small>
          <div className='social-icons'>
            <a className='social-icon-link facebook' href='https://www.facebook.com/picto.design.ljubljana' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </a>
            <a className='social-icon-link instagram' href='https://www.instagram.com/go_picto/' target='_blank' aria-label='Instagram' >
              <i className='fab fa-instagram' />
            </a>
            <a className='social-icon-link youtube' href='/' target='_blank' aria-label='Youtube'>
              <i className='fab fa-youtube' />
            </a>
            <a className='social-icon-link twitter' href='https://www.google.com/maps/place/Picto.design/@46.0574263,14.5073083,17z/data=!3m1!4b1!4m5!3m4!1s0x477acc9417577119:0x9a591440b9a9dd86!8m2!3d46.0574586!4d14.5094956' target='_blank' aria-label='Twitter'>
              <i className="fas fa-map-marker-alt"/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;