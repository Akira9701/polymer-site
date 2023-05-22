import React, { Component, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ setModal }: { setModal: Dispatch<SetStateAction<boolean>> }) => {
  const [mobileBar, setMobileBar] = useState(false);

  return (
    <header>
      <div className='header_desktop'>
        <p>Имя компании</p>
        <nav>
          <ul>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'header_active-link' : '')} to='/'>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'header_active-link' : '')}
                to='/price'
              >
                Цены
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'header_active-link' : '')}
                to='/contacts'
              >
                Контакты
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'header_active-link' : '')}
                to='/colors'
              >
                Цвета
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'header_active-link' : '')}
                to='/examples'
              >
                Работы
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          className='base-yellow-button'
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          Обратный звонок
        </button>
      </div>
      <div className='header_mobile'>
        <div className={`header_mobile-nav-bar ${mobileBar ? 'active' : ''}`}>
          <p>Имя компании</p>
          <nav>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'header_active-link' : '')}
                  to='/'
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'header_active-link' : '')}
                  to='/price'
                >
                  Цены
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'header_active-link' : '')}
                  to='/contacts'
                >
                  Контакты
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'header_active-link' : '')}
                  to='/colors'
                >
                  Цвета
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'header_active-link' : '')}
                  to='/examples'
                >
                  Работы
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className='header_mobile-nav-bar_close-btn'>
            <svg
              className='bi bi-x-lg'
              fill='currentColor'
              height='16'
              viewBox='0 0 16 16'
              width='16'
              xmlns='http://www.w3.org/2000/svg'
              onClick={() => {
                setMobileBar((prevState) => !prevState);
              }}
            >
              <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
            </svg>
          </div>
        </div>
        <svg
          className='bi bi-list'
          fill='currentColor'
          height='16'
          viewBox='0 0 16 16'
          width='16'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            setMobileBar((prevState) => !prevState);
          }}
        >
          <path
            d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
            fillRule='evenodd'
          />
        </svg>

        <button
          className='base-yellow-button'
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          Обратный звонок
        </button>
      </div>
    </header>
  );
};

export default Header;
