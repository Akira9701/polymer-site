import React from 'react';
import type { Dispatch, SetStateAction } from 'react';

const GalleryModal = ({
  src,
  setModal
}: {
  src: string;
  setModal: Dispatch<SetStateAction<{ src: string; visibility: boolean }>>;
}) => {
  console.log();
  return (
    <section
      className='gallery-modal_section'
      role='presentation'
      onClick={() => setModal((prevState) => ({ ...prevState, visibility: false }))}
      onKeyDown={() => setModal((prevState) => ({ ...prevState, visibility: false }))}
    >
      <div className='gallery-modal_container'>
        <img alt='' src={src} />
      </div>
    </section>
  );
};

export default GalleryModal;
