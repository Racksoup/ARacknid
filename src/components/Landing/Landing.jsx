import React from 'react';
import './Landing.scss';
import Desk1 from '../../assets/images/Desk1.jpg';

import ThreeScene from '../ThreeScene.jsx';
import Goals from './Goals/Goals.jsx';
import Cover from './Cover/Cover.jsx';
import Examples from './Examples/Examples.jsx';
import LandingTestimonials from './LandingTestimonials/LandingTestimonials.jsx';
import LandingContact from './LandingContact/LandingContact.jsx';

const Landing = () => {
  const websiteDesign = [
    { image: Desk1, title: 'First Website' },
    { image: Desk1, title: 'Second Website' },
    { image: Desk1, title: 'Third Website' },
    { image: Desk1, title: 'Fourth Website' },
  ];

  return (
    <div className='Landing'>
      <ThreeScene />
      <Cover />
      <Goals />
      <div style={{ marginTop: '11rem' }} />
      <Examples landing={true} info={websiteDesign} />
      <LandingTestimonials />
      <div style={{ marginTop: '18rem' }} />
      <LandingContact />
    </div>
  );
};

export default Landing;
