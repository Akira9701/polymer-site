import React from 'react';

import Contacts from '../data/Contacts';
import { FormDataContacts } from '../data/FormConfigs';

import Form from './Form';
import MapComponent from './Map';

const ContactsComponent = () => {
  const mapData = { center: [55.065334, 82.943103], zoom: 15 };

  return (
    <section className='callback_section'>
      <div className='callback_container'>
        <div className='callback_contact-wrapper'>
          <h2>Наши контакты</h2>
          <ul>
            <li>
              <span>Адресс: </span>
              {Contacts.adress}
            </li>
            <li>
              <span>Телефон: </span>
              {Contacts.phone}
            </li>
            <li>
              <span>Почта: </span>
              {Contacts.email}
            </li>
          </ul>
          <div className='callback_map-container'>
            <MapComponent data={mapData} />
          </div>
        </div>
        <div className='callback_form-wrapper'>
          <div className='callback_form-container'>
            <Form FormData={FormDataContacts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsComponent;
