import React from 'react';
import './Landing.scss';

import ThreeScene from '../ThreeScene.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Goals from './Goals/Goals.jsx';
import Cover from './Cover/Cover.jsx';
import Examples from './Examples/Examples.jsx';

const Landing = () => {
  return (
    <div className='Landing'>
      <ThreeScene />
      <Navbar />
      <Cover />
      <Goals />
      <Examples />
    </div>
  );
};

export default Landing;
