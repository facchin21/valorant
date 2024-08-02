import React from 'react';
import LazyLoad from 'react-lazyload';

const LazyImage = ({ src, alt, style }) => (
  <LazyLoad height={200} offset={100}>
    <img src={src} alt={alt} style={style} />
  </LazyLoad>
);

export default LazyImage;