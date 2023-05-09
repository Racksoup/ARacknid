import React, { useState, useEffect } from 'react';
import './Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showNav, toggleShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 0) {
        toggleShowNav(true);
      }
      if (window.scrollY == 0) {
        toggleShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='NavBox'>
      {showNav && <div className='NavPlaceholder'></div>}
      {showNav ? (
        <Nav pos='fixed' underline='rgba(255,255,255,.5) solid 1px' />
      ) : (
        <Nav pos='relative' underline='none' />
      )}
    </div>
  );
};

const Nav = ({ pos, underline }) => {
  return (
    <div className='Navbar' style={{ position: `${pos}`, top: `0` }}>
      <div className='Content' style={{ borderBottom: `${underline}` }}>
        <div className='Left'>
          <Link to='/'>
            <h2>ARacknid Design</h2>
          </Link>
          <div className='NavItems'>
            <div className='Drop'>
              <div className='DropOuter'>
                <div className='DropTitle'>
                  <p>How I Help</p>
                  <FontAwesomeIcon icon={faChevronDown} className='Icon' />
                </div>
                <div className='DropInner'>
                  <Link to='/website-design'>
                    <p>Website Design</p>
                  </Link>
                  <Link to='/website-implementation'>
                    <p>Website Implementation</p>
                  </Link>
                  <Link to='/website-hosting'>
                    <p>Website Hosting</p>
                  </Link>
                  <Link to='/analytics'>
                    <p>SEO & Analytics</p>
                  </Link>
                  <Link to='/animation'>
                    <p>Animation</p>
                  </Link>
                  <Link to='/logo-design'>
                    <p>Logo Design</p>
                  </Link>
                  <Link to='/business-cards'>
                    <p>Busines Card Design</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className='Drop'>
              <div className='DropOuter'>
                <div className='DropTitle'>
                  <p>Why ARacknid</p>
                  <FontAwesomeIcon icon={faChevronDown} className='Icon' />
                </div>
                <div className='DropInner'>
                  <Link to='/about'>
                    <p>About</p>
                  </Link>
                  <Link to='/community'>
                    <p>Community</p>
                  </Link>
                  <Link to='/planning'>
                    <p>Planning</p>
                  </Link>
                </div>
              </div>
            </div>
            {/* <p>Testimonials</p> */}
          </div>
        </div>
        <div className='Right'>
          <div className='ContactInfo'>
            <p>Connor@ARacknid.ca</p>
            <p>(613)-869-2343</p>
          </div>
          <Link to='/planning'>
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
