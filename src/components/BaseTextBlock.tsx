import React from 'react';

const BaseTextBlock = ({ title, content }: { title: string; content?: string }) => (
  <div className='base-section-with-text'>
    <h2>{title}</h2>
    {content && <p>{content}</p>}
  </div>
);

export default BaseTextBlock;
