import React from 'react';
import './Examples.scss';

import Website1 from '../../../assets/images/Website1.jpg';

const Examples = () => {
  return (
    <div className='Examples'>
      <div className='Content'>
        <h3>Businesses I've Helped</h3>
        <div className='Grid'>
          <div className='Item'>
            <img src={Website1} alt='Website' />
            <h5>BIG CAMERA</h5>
          </div>
          <div className='Item'>
            <img src={Website1} alt='Website' />
            <h5>BIG CAMERA</h5>
          </div>
          <div className='Item'>
            <img src={Website1} alt='Website' />
            <h5>BIG CAMERA</h5>
          </div>
          <div className='Item'>
            <img src={Website1} alt='Website' />
            <h5>BIG CAMERA</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
