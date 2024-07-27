import React from 'react';
import PropTypes from 'prop-types';
import Gif from './Gif';
import NoGifs from './NoGifs'

const GifList = ({ data }) => {
  let gifs;
if (data.length > 0 ){
  gifs = data.map((gif, index) => (
    <Gif 
      url={gif.images.fixed_height.url} 
      key={`${gif.id}-${index}`}
    />
  ))
} else {
  gifs = <NoGifs />
}

  return (
    <ul className="gif-list">
      {gifs}
    </ul>
  );
}

GifList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      images: PropTypes.shape({
        fixed_height: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default GifList;