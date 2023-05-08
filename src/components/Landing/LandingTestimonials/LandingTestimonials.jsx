import React from 'react';
import './LandingTestimonials.scss';
import Website1 from '../../../assets/images/Website1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const LandingTestimonials = () => {
  return (
    <div className='LandingTestimonials'>
      <div className='Content'>
        <TestimonialWidget
          image={Website1}
          name='John Doe'
          business='Drew Law'
          text='They did a great job! I couldn’t ask for a more professional developer. Really took the time to make sure I understand what I need.'
        />
        <div className='Center'>
          <h4>Helping business owners reach their customers</h4>
          <TestimonialWidget
            image={Website1}
            name='John Doe'
            business='Drew Law'
            text='They did a great job! I couldn’t ask for a more professional developer. Really took the time to make sure I understand what I need.'
          />
        </div>
        <TestimonialWidget
          image={Website1}
          name='John Doe'
          business='Drew Law'
          text='They did a great job! I couldn’t ask for a more professional developer. Really took the time to make sure I understand what I need.'
        />
      </div>
    </div>
  );
};

const TestimonialWidget = ({ image, name, business, text }) => {
  return (
    <div className='TestimonialWidget'>
      <div className='Info'>
        <div className='NameBox'>
          <img src={image} alt='Client' />
          <div className='Names'>
            <h5>{business}</h5>
            <h6>{name}</h6>
          </div>
        </div>
        <p className='TestimonialText'>{text}</p>
        <button>Learn more</button>
      </div>
      <div className='Stats'>
        <StatItem number='430' statName='Web Traffic' />
        <StatItem number='430' statName='Web Traffic' />
        <StatItem number='430' statName='Web Traffic' />
      </div>
    </div>
  );
};

const StatItem = ({ number, statName }) => {
  return (
    <div className='Stat-Item'>
      <FontAwesomeIcon icon={faArrowUp} className='Icon' />
      <div className='Stat-Item-Right'>
        <div className='NumLine'>
          <p className='Number'>{number}</p>
          <p className='Percent'>%</p>
        </div>
        <p className='StatName'>{statName}</p>
      </div>
    </div>
  );
};

export default LandingTestimonials;
