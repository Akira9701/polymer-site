import React, { useState } from 'react';

import GalleryModal from '../components/GalleryModat';
import ExampleData from '../data/Examples';

const Examples = () => {
  const [image, setImage] = useState({ src: '', visibility: false });
  console.log(image);
  return (
    <section className='examples_section'>
      <h2>Примеры работ</h2>
      <ul>
        {ExampleData.map((el) => (
          <li
            role='presentation'
            onClick={() => setImage({ src: el, visibility: true })}
            onKeyDown={() => setImage({ src: el, visibility: true })}
          >
            <img alt='img' src={el} />
          </li>
        ))}
      </ul>
      {image.visibility && <GalleryModal setModal={setImage} src={image.src} />}
    </section>
  );
};

export default Examples;
