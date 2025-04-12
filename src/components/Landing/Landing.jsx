import React, { useEffect, useState } from 'react';
import './Landing.scss';
import ThumbnailPandaNFT from '../../assets/images/ThumbnailPandaNFT.png';
import ThumbnailWebsiteDesign2 from '../../assets/images/ThumbnailWebsiteDesign2.png';
import ThumbnailFinancialAdvisor from '../../assets/images/ThumbnailFinancialAdvisor.png';
import ThumbnailPizzeria from '../../assets/images/ThumbnailPizzeria.png';
import SportStore from '../../assets/images/EcommerceSportsStore.png';

import ThreeScene from '../ThreeScene.jsx';
import Goals from './Goals/Goals.jsx';
import Cover from './Cover/Cover.jsx';
import Examples from './Examples/Examples.jsx';
import LandingTestimonials from './LandingTestimonials/LandingTestimonials.jsx';
import LandingContact from './LandingContact/LandingContact.jsx';

const Landing = () => {
  const websiteDesign = [
    {
      image: ThumbnailPizzeria,
      title: 'Pizzeria',
      link: 'https://stefanos-family-pizzeria.onrender.com/',
    },  
    {
      image: SportStore,
      title: 'Ecommerce Sports Store',
      link: 'https://fitness-store.onrender.com/',
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, []);

  return (
    <div className='Landing'>
      <ThreeScene />
      <Cover />
      <Goals />
      <div className='ExamplesSpacer' />
      <Examples landing={true} info={websiteDesign} />
      {/* <LandingTestimonials /> */}
      <div className='ContactSpacer' />
      <LandingContact />
    </div>
  );
};

export default Landing;
