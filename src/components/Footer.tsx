import React, { Component, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import Contacts from '../data/Contacts';

const Footer = ({ setModal }: { setModal: Dispatch<SetStateAction<boolean>> }) => {
  const [state, setState] = useState('');

  return (
    <footer>
      <div className='footer_container'>
        <div className='footer_top-container'>
          <div className='footer_top-container_info'>
            <p className='footer_top-container_logo'>Landing</p>
          </div>
          <ul>
            <li>
              <span>Телефон: </span>
              {Contacts.phone}
            </li>
            <li>
              <span>Почта: </span>
              {Contacts.email}
            </li>
          </ul>
        </div>
        <hr />
        <div className='footer_bottom-container'>
          {/* <p className='footer_bottom-container_description'>©2023 Yourcompany</p> */}
          <ul className='footer_bottom-container_links'>
            <li>
              <Link to='/'>Главная</Link>
            </li>
            <li>
              <Link to='/price'>Цены</Link>
            </li>
            <li>
              <Link to='/contacts'>Контакты</Link>
            </li>
            <li>
              <Link to='/contacts'>Цвета</Link>
            </li>
            <li>
              <Link to='/contacts'>Работы</Link>
            </li>
          </ul>
          <button
            className='base-yellow-button'
            onClick={() => {
              setModal((prevState) => !prevState);
            }}
          >
            Обратный звонок
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
