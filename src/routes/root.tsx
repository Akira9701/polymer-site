import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import ModalWindow from '../components/ModalWindow';

const Root = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Header setModal={setModal} />
      <main>
        <Outlet context={[modal, setModal]} />
      </main>
      <Footer setModal={setModal} />
      {modal && <ModalWindow setModal={setModal} />}
    </>
  );
};

export default Root;
