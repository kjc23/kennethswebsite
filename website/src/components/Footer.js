import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wraEDITED'>
          <div class='footer-logo'>
          </div>
          <div class='social-icons'>
            <Link 
            className='social-icon-link github'
              to={"https://github.com/kjc23"}>
              <FontAwesomeIcon className='github' icon={faGithub} />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/kenny_3535/'
              target='_blank'
              aria-label='Instagram'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/profile.php?id=100072663497549'
              target='_blank'
              aria-label='Youtube'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              class='social-icon-link linked-in'
              to='https://www.linkedin.com/in/kenneth-cain-57b832262/'
              target='_blank'
              aria-label='Twitter'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;