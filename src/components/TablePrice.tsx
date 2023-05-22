import React from 'react';

import PriceData from '../data/Price';

const TablePrice = () => {
  console.log(1);
  return (
    <table className='table-price_container'>
      <tbody>
        {PriceData.map((el, index) => (
          <tr>
            <td
              colSpan={Object.keys(el).length === 3 ? 2 : 1}
              rowSpan={el.rowspan}
              className={`price-text-left ${
                el.rowspan || Object.keys(el).length === 3 ? 'price-text-zaglav' : ''
              }`}
            >
              {Object.keys(el).length === 5 || Object.keys(el).length === 3 ? el.name : el.size}
            </td>
            {Object.keys(el).length === 5 && <td className='price-text-left'>{el.size}</td>}

            <td>{el.mer}</td>
            <td>{el.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablePrice;
