import React, { useRef } from 'react';

import SliderControllers from './sliderComponents/SliderControllers';

const Slider = ({ images }: { images: string[] }) => {
  const sliderContainer = useRef<HTMLUListElement>(null);
  const sliderPositon = useRef<number>(0);
  const pagination = useRef<HTMLUListElement>(null);

  function changePosition(left: boolean) {
    if (!left)
      sliderPositon.current !== 3 ? (sliderPositon.current += 1) : (sliderPositon.current = 0);
    else {
      sliderPositon.current !== 0 ? (sliderPositon.current -= 1) : (sliderPositon.current = 3);
    }
    if (sliderContainer.current !== null) {
      sliderContainer.current.style.left = `-${sliderPositon.current}00%`;
    }
    if (pagination.current !== null) {
      for (let i = 0; i < images.length; i++) {
        pagination.current
          .querySelectorAll('li')
          [i].classList.remove('slider_controllers-wrap_dots-list_item');
      }
      pagination.current
        .querySelectorAll('li')
        [sliderPositon.current].classList.add('slider_controllers-wrap_dots-list_item');
    }
  }

  return (
    <div className='slider_component'>
      <SliderControllers ref={pagination} changePosition={changePosition} items={images} />
      <div className='slider_slides-container'>
        <ul
          ref={sliderContainer}
          className='slider_slides-list'
          style={{ width: `${images.length}00%` }}
        >
          {images.map((el) => (
            <li key={el}>
              <img alt='картинка' src={el} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
