import React from 'react';
import type { SetStateAction, Dispatch } from 'react';

import texture from '../assets/images/figure-bg.jpg';

const FrontBanner = ({ setModal }: { setModal: Dispatch<SetStateAction<boolean>> }) => {
  console.log(1);
  return (
    <section className='front-banner_section'>
      <div className='front-banner_text-wrapper'>
        <h1>Порошковая покраска в Новосибириске</h1>
        <p>
          Услуги порошковой окраски металла в Новосибириске и области в любые цвета по шкале RAL, с
          использованием красок только самых известных и качественно зарекомендовавших себя
          производителей порошковой краски.
        </p>
        <button
          className='base-dark-button front-banner_text-wrapper_left-btn'
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          Отправить заявку
        </button>
        <button
          className='base-white-button'
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          Узнать цену
        </button>
      </div>
      <div className='front-banner_block-3d'>
        <div className='container'>
          <div className='back side' />
          <div className='left side' />
          <div className='right side' />
          <div className='top side' />
          <div className='bottom side' />
          <div className='front side' />
        </div>
      </div>
    </section>
  );
};

export default FrontBanner;
