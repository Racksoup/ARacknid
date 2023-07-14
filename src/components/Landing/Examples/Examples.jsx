import React from 'react';
import './Examples.scss';

const Examples = ({ landing, info }) => {
  return (
    <div className='Examples'>
      <div className='Examples-Content'>
        {landing && <h3>Businesses I've Helped</h3>}
        <div className='Grid'>
          <a className='Item' href={info[0].link} target='_blank'>
            <img src={info[0].image} alt='Website' />
            <h5>{info[0].title}</h5>
          </a>
          <a className='Item' href={info[1].link} target='_blank'>
            <img src={info[1].image} alt='Website' />
            <h5>{info[1].title}</h5>
          </a>
          <a className='Item' href={info[2].link} target='_blank'>
            <img src={info[2].image} alt='Website' />
            <h5>{info[2].title}</h5>
          </a>
          <a className='Item' href={info[3].link} target='_blank'>
            <img src={info[3].image} alt='Website' />
            <h5>{info[3].title}</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Examples;
