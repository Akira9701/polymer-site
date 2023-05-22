import React, { forwardRef } from 'react';

interface SliderControllersI {
  changePosition: (left: boolean) => void;
  items: (string | number)[];
}

const SliderControllers = forwardRef<HTMLUListElement, SliderControllersI>(
  ({ changePosition, items }, ref) => (
    <div className='slider_controllers-wrap'>
      <ul ref={ref} className='slider_controllers-wrap_dots-list'>
        {items.map((el) => (
          <li key={el} />
        ))}
      </ul>

      <button className='slider_left-btn' onClick={() => changePosition(true)}>
        <svg
          className='bi bi-caret-left-fill'
          fill='currentColor'
          height='16'
          viewBox='0 0 16 16'
          width='16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z' />
        </svg>
      </button>
      <button onClick={() => changePosition(false)}>
        <svg
          className='bi bi-caret-right-fill'
          fill='currentColor'
          height='16'
          viewBox='0 0 16 16'
          width='16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z' />
        </svg>
      </button>
    </div>
  )
);

export default SliderControllers;
