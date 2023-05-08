import React from 'react';
import './InfoPage.scss';

const InfoPage = ({ image, title, subtitle, text }) => {
  return (
    <div className='InfoPage'>
      <div className='BackgroundSection'>
        <img src={image} alt='Info-Image' />
        <h2>{title}</h2>
      </div>
      <div className='Content'>
        <h3>{subtitle}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoPage;
