import React, { Component } from 'react';

import works from '../data/Works';

import BaseTextBlock from './BaseTextBlock';
import Slider from './Slider';

const data = {
  title: `Некоторые наши работы`,
  content: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
  Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
  В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
  Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
  Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.`
};

const Works = () => (
  <section className='works_section'>
    <Slider images={works} />
    <BaseTextBlock content={data.content} title={data.title} />
  </section>
);

export default Works;
