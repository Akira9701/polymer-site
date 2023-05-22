import React from 'react';

import ColorsData from '../data/RalData';

const Colors = () => {
  console.log(1);
  return (
    <section className='colors_section'>
      <h2>Цвета Ral</h2>
      <ul>
        {ColorsData.map((el) => (
          <li>
            <div style={{ backgroundColor: el.color }} />
            <p>{el.ral}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Colors;
