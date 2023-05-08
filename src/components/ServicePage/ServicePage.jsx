import React from 'react';
import './ServicePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicePage = ({ layout, icon, label, title, subtitle, text, image }) => {
  return (
    <div className='ServicePage'>
      <div className='Content'>
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
    </div>
  );
};

export default ServicePage;
