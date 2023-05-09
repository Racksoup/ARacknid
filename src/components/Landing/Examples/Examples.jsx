import React from 'react';
import './Examples.scss';

const Examples = ({ landing, info }) => {
  return (
    <div className='Examples'>
      <div className='Examples-Content'>
        {landing && <h3>Businesses I've Helped</h3>}
        <div className='Grid'>
          <div className='Item'>
            <img src={info[0].image} alt='Website' />
            <h5>{info[0].title}</h5>
          </div>
          <div className='Item'>
            <img src={info[1].image} alt='Website' />
            <h5>{info[1].title}</h5>
          </div>
          <div className='Item'>
            <img src={info[2].image} alt='Website' />
            <h5>{info[2].title}</h5>
          </div>
          <div className='Item'>
            <img src={info[3].image} alt='Website' />
            <h5>{info[3].title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
