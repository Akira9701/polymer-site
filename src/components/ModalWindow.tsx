import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import { FormDataModal } from '../data/FormConfigs';

import Form from './Form';

const ModalWindow = ({ setModal }: { setModal: Dispatch<SetStateAction<boolean>> }) => {
  const modalToggle = (e: React.ChangeEvent<HTMLDivElement>) => {
    if (e.target.classList.contains('modal_container')) {
      setModal((prevState) => !prevState);
    }
  };

  return (
    <div className='modal_container' role='presentation' onClick={modalToggle} onKeyDown={modalToggle}>
      <div className='modal_form-wrap'>
        <Form FormData={FormDataModal} />
      </div>
    </div>
  );
};

export default ModalWindow;
