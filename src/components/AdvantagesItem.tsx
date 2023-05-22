import React from 'react';

import type { IAdvantagesItem } from '../types';

interface IAdvantagesItemComponent {
  item: IAdvantagesItem;
}

const AdvantagesItem = ({ item }: IAdvantagesItemComponent) => (
  <>
    <img alt='icon' src={`${item.img}`} />

    <p className='advantages_plus-wrapper_item_title'>{item.name}</p>
    <p className='advantages_plus-wrapper_item_comment'>{item.comment}</p>
  </>
);

export default AdvantagesItem;
