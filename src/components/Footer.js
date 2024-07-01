import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wraEDITED'>
          <div className='footer-logo'>
          </div>
          <div className='social-icons'>
            <Link 
            className='social-icon-link github'
              to={"https://github.com/kjc23"}>
              <FontAwesomeIcon className='github' icon={faGithub} />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/kenny_3535/'
              target='_blank'
              aria-label='Instagram'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className='social-icon-link facebook'
              to='https://www.facebook.com/profile.php?id=100072663497549'
              target='_blank'
              aria-label='Youtube'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              className='social-icon-link linked-in'
              to='https://www.linkedin.com/in/kenneth-cain-57b832262/'
              target='_blank'
              aria-label='Twitter'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              className='social-icon-link spotify'
              to={"https://open.spotify.com/user/cain.kenny19"}
              >
                <FontAwesomeIcon icon={faSpotify} />
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;