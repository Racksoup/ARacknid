import React, { useEffect, useState } from 'react';
import './ServicePage.scss';
import Examples from '../Landing/Examples/Examples.jsx';
import Desk1 from '../../assets/images/Desk1.jpg';
import ThumbnailPandaNFT from '../../assets/images/ThumbnailPandaNFT.png';
import ThumbnailWebsiteDesign2 from '../../assets/images/ThumbnailWebsiteDesign2.png';
import ThumbnailFinancialAdvisor from '../../assets/images/ThumbnailFinancialAdvisor.png';
import ThumbnailPizzeria from '../../assets/images/ThumbnailPizzeria.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicePage = ({ layout, icon, label, title, subtitle, text, image, examples }) => {
  const websiteDesign = [
    {
      image: ThumbnailPandaNFT,
      title: 'Panda NFTs',
      link: 'https://nft-website.onrender.com/',
    },
    {
      image: ThumbnailFinancialAdvisor,
      title: 'Financial Advisor',
      link: 'https://financial-planner.onrender.com/',
    },
    {
      image: ThumbnailPizzeria,
      title: 'Pizzeria',
      link: 'https://stefanos-family-pizzeria.onrender.com/',
    },
    {
      image: ThumbnailWebsiteDesign2,
      title: 'Website Design',
      link: 'https://website-design.onrender.com/',
    },
  ];
  const animations = [
    { image: Desk1, title: 'First Animation' },
    { image: Desk1, title: 'Second Animation' },
    { image: Desk1, title: 'Third Animation' },
    { image: Desk1, title: 'Fourth Animation' },
  ];
  const logoDesign = [
    { image: Desk1, title: 'First Logo' },
    { image: Desk1, title: 'Second Logo' },
    { image: Desk1, title: 'Third Logo' },
  ];
  const businessCards = [
    { image: Desk1, title: 'First Business Card' },
    { image: Desk1, title: 'Second Business Card' },
    { image: Desk1, title: 'Third Business Card' },
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

  let smallResize = 1;
  if (windowWidth < 700) {
    smallResize = 2;
  }

  return (
    <div className='ServicePage'>
      <div className='ServicePage-Content'>
        {layout == 1 && <img src={image} alt='Service' />}
        <div className='Info'>
          <div className='IconBox'>
            <FontAwesomeIcon icon={icon} className='Icon' />
          </div>
          <label>{label}</label>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <p>{text}</p>
        </div>
        {layout == 2 && <img src={image} alt='Service' />}
      </div>
      {examples != 'none' && <div className='Examples-Spacer' />}
      {examples == 'websiteDesign' && (
        <div>
          <h3 className='LargeTitle'>Businesses I've helped</h3>
          <Examples info={websiteDesign} landing={false} />
        </div>
      )}
      {examples == 'animations' && (
        <div>
          <h3 className='LargeTitle'>Animations I've made</h3>
          <Examples info={animations} landing={false} />
        </div>
      )}
      {examples == 'logoDesign' && (
        <div className='SmallExamples'>
          <h3>Examples</h3>
          <div className='SmallExamples-Content'>
            <img
              src={logoDesign[0].image}
              alt='Example'
              style={{
                width: `${parseInt(420 * (smallResize * (windowWidth / 1920)))}px`,
                height: `${parseInt(256 * (smallResize * (windowWidth / 1920)))}px`,
              }}
            />

            <img
              src={logoDesign[1].image}
              alt='Example'
              style={{
                width: `${parseInt(420 * (smallResize * (windowWidth / 1920)))}px`,
                height: `${parseInt(256 * (smallResize * (windowWidth / 1920)))}px`,
              }}
            />
            <img
              src={logoDesign[2].image}
              alt='Example'
              style={{
                width: `${parseInt(420 * (smallResize * (windowWidth / 1920)))}px`,
                height: `${parseInt(256 * (smallResize * (windowWidth / 1920)))}px`,
              }}
            />
          </div>
        </div>
      )}
      {examples == 'businessCards' && (
        <div className='SmallExamples'>
          <h3>Examples</h3>
          <div className='SmallExamples-Content'>
            <img
              src={businessCards[0].image}
              alt='Example'
              style={{
                width: `${parseInt(420 * (smallResize * (windowWidth / 1920)))}px`,
                height: `${parseInt(256 * (smallResize * (windowWidth / 1920)))}px`,
              }}
            />
            <img
              src={businessCards[1].image}
              alt='Example'
              style={{
                width: `${parseInt(420 * (smallResize * (windowWidth / 1920)))}px`,
                height: `${parseInt(256 * (smallResize * (windowWidth / 1920)))}px`,
              }}
            />
            <img
              src={businessCards[2].image}
              alt='Example'
              style={{
                width: `${parseInt(420 * (smallResize * (windowWidth / 1920)))}px`,
                height: `${parseInt(256 * (smallResize * (windowWidth / 1920)))}px`,
              }}
            />
          </div>
        </div>
      )}
      {examples != 'none' && <div style={{ marginBottom: '4rem' }} />}
    </div>
  );
};

export default ServicePage;
