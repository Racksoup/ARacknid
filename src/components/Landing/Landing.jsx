import React from 'react';
import './Landing.scss';

import ThreeScene from '../ThreeScene.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Goals from './Goals/Goals.jsx';
import Cover from './Cover/Cover.jsx';

const Landing = () => {
  return (
    <div className='Landing'>
      <ThreeScene />
      <Navbar />
      <Cover />
      <Goals />
    </div>
  );
};

export default Landing;
