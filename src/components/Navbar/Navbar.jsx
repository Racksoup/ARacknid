import React, { useState, useEffect } from 'react';
import './Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
          <h2>ARacknid Design</h2>
          <div className='NavItems'>
            <div className='Drop'>
              <div className='DropOuter'>
                <div className='DropTitle'>
                  <p>How We Help</p>
                  <FontAwesomeIcon icon={faChevronDown} className='Icon' />
                </div>
                <div className='DropInner'>
                  <p>Website Design</p>
                  <p>Website Implementation</p>
                  <p>Website Hosting</p>
                  <p>SEO & Analytics</p>
                  <p>Animation</p>
                  <p>Logo Design</p>
                  <p>Busines Card Design</p>
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
                  <p>About</p>
                  <p>Community</p>
                  <p>Planning</p>
                </div>
              </div>
            </div>
            <p>Testimonials</p>
          </div>
        </div>
        <div className='Right'>
          <p>Connor@ARacknid.ca</p>
          <p>(613)-869-2343</p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
