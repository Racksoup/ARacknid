import React from 'react';
import './InfoPage.scss';
import LandingContact from '../Landing/LandingContact/LandingContact.jsx';

const InfoPage = ({ image, title, subtitle, text, contact }) => {
  return (
    <div className='InfoPage'>
      {contact ? (
        <div className='BackgroundSection'>
          <img src={image} alt='Info-Image' className='Contact-Image' />
          <div className='InfoPage-Content '>
            <h3>{subtitle}</h3>
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div className='BackgroundSection'>
          <img src={image} alt='Info-Image' />
          <h2>{title}</h2>
        </div>
      )}

      {contact ? (
        <div className='ContactSpace'>
          <LandingContact />
        </div>
      ) : (
        <div className='InfoPage-Content'>
          <h3>{subtitle}</h3>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
