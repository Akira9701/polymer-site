import React from 'react';

import TablePrice from './TablePrice';

const PriceComponent = () => {
  console.log(1);
  return (
    <section className='price_section'>
      <h2>Таблица с ценами</h2>
      <TablePrice />
      <p>
        Окончательную стоимость. можно уточнить у менеджеров нашей компании по телефонам указанным
        на сайте.
      </p>
    </section>
  );
};

export default PriceComponent;
