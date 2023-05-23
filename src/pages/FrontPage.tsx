import React from 'react';
import type { SetStateAction, Dispatch } from 'react';
import { useOutletContext } from 'react-router-dom';

import Advantages from '../components/Advantages';
import ContactsComponent from '../components/Contacts';
import FrontBanner from '../components/FrontBanner';
import Works from '../components/Works';

const FrontPage = () => {
  const [, setModal] = useOutletContext<Dispatch<SetStateAction<boolean>>[]>();

  return (
    <>
      <FrontBanner setModal={setModal} />
      <Advantages />
      <Works />
      <ContactsComponent />
    </>
  );
};

export default FrontPage;
