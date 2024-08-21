import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <a href={props.hrefUrl} target="_blank" rel="noreferrer">
      <img src={props.url} alt={props.title} />
    </a>
  </li>
);

export default Gif;