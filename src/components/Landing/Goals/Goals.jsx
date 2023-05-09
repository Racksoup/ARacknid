import React from 'react';
import './Goals.scss';
import Website2 from '../../../assets/images/Website2.jpg';
import StreetArt from '../../../assets/images/StreetArt.jpg';
import Customer from '../../../assets/images/Customer.jpg';
import Analytics from '../../../assets/images/Analytics.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faTags, faChildReaching, faSearch } from '@fortawesome/free-solid-svg-icons';

const Goals = () => {
  return (
    <div className='Goals'>
      <div className='Content'>
        <h3>Goals I can help you achieve</h3>
        <WideInfoSection
          layout={window.innerWidth > 1020 ? 2 : 1}
          icon={faLightbulb}
          title='Understand vital website features'
          text='Every website is different. Every business needs a different website. I help you figure out features your website will need to compete in your industry'
          image={Website2}
        />
        <WideInfoSection
          layout={1}
          icon={faTags}
          title='Build your Brand'
          text='An inviting style is what a business needs to capture an audiences attention. I can help you develop an exciting logo, business card template, and website design.'
          image={StreetArt}
        />
        <WideInfoSection
          layout={window.innerWidth > 1020 ? 2 : 1}
          icon={faChildReaching}
          title='Grow Customer Relationships'
          text='Every website is different. Every business needs a different website. I help you figure out what features your website needs to compete in your industry'
          image={Customer}
        />
        <WideInfoSection
          layout={1}
          icon={faSearch}
          title='Analytics and Hosting'
          text='An inviting style is what a business needs to capture an audiences attention. I can help you develop an exciting logo, business card template, and website design.'
          image={Analytics}
        />
      </div>
    </div>
  );
};

const WideInfoSection = ({ layout, icon, title, text, image }) => {
  return (
    <div className='WideInfoSection'>
      {layout == 1 && <img src={image} placeholder='Goal' />}
      <div className='Info'>
        <div className='IconBox'>
          <FontAwesomeIcon icon={icon} className='Icon' />
        </div>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
      {layout == 2 && <img src={image} placeholder='Goal' />}
    </div>
  );
};

export default Goals;
