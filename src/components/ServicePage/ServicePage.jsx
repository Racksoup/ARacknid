import React, { useEffect, useState } from 'react';
import './ServicePage.scss';
import Examples from '../Landing/Examples/Examples.jsx';
import Desk1 from '../../assets/images/Desk1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicePage = ({ layout, icon, label, title, subtitle, text, image, examples }) => {
  const websiteDesign = [
    { image: Desk1, title: 'First Website' },
    { image: Desk1, title: 'Second Website' },
    { image: Desk1, title: 'Third Website' },
    { image: Desk1, title: 'Fourth Website' },
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

  // const [dimensions, setDimensions] = useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth,
  // });
  // useEffect(() => {
  //   function handleResize() {
  //     setDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth,
  //     });
  //   }
  //   window.addEventListener('resize', handleResize);

  //   return (_) => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // });

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
                width: `${parseInt(420 * (screen.width / 1920))}px`,
                height: `${parseInt(256 * (screen.width / 1920))}px`,
              }}
            />

            <img
              src={logoDesign[1].image}
              alt='Example'
              style={{
                width: `${parseInt(420 * (screen.width / 1920))}px`,
                height: `${parseInt(256 * (screen.width / 1920))}px`,
              }}
            />
            <img
              src={logoDesign[2].image}
              alt='Example'
              style={{
                width: `${parseInt(420 * (screen.width / 1920))}px`,
                height: `${parseInt(256 * (screen.width / 1920))}px`,
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
                width: `${parseInt(420 * (screen.width / 1920))}px`,
                height: `${parseInt(256 * (screen.width / 1920))}px`,
              }}
            />
            <img
              src={businessCards[1].image}
              alt='Example'
              style={{
                width: `${parseInt(420 * (screen.width / 1920))}px`,
                height: `${parseInt(256 * (screen.width / 1920))}px`,
              }}
            />
            <img
              src={businessCards[2].image}
              alt='Example'
              style={{
                width: `${parseInt(420 * (screen.width / 1920))}px`,
                height: `${parseInt(256 * (screen.width / 1920))}px`,
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
