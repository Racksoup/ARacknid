import React, { useState, useEffect } from 'react';
import './Navbar.scss';

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
        <Nav pos='fixed' underline='rgba(255,255,255,1) solid 1px' />
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
        <p>fdsfdscxvcxdsf</p>
      </div>
    </div>
  );
};

export default Navbar;
