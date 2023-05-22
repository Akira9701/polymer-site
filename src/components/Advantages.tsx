import React, { Component } from 'react';

import img from '../assets/images/polymer2.jpg';
import AdvantagesList from '../data/AdvantagesList';

import AdvantagesItem from './AdvantagesItem';
import BaseTextBlock from './BaseTextBlock';

const Advantages = () => (
  <section className='advantages_section'>
    <div className='advantages_info-wrapper'>
      <BaseTextBlock
        title='Наши преимущества'
        content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
      />

      <ul className='advantages_plus-wrapper'>
        {AdvantagesList.map((el) => (
          <li key={el.name}>
            <AdvantagesItem item={el} />
          </li>
        ))}
      </ul>
    </div>
    <div className='advantages_img-wrapper'>
      <img alt='полимерная покраска' src={img} />
    </div>
  </section>
);

export default Advantages;
