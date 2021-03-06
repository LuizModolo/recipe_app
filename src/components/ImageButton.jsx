import PropTypes from 'prop-types';
import React from 'react';

export default function ImageButton({ testid, onClick, imageSrc, altImage, className }) {
  return (
    <button onClick={ onClick } className={ className } type="button">
      <img
        data-testid={ testid }
        src={ imageSrc }
        alt={ altImage }
      />
    </button>
  );
}

ImageButton.propTypes = {
  altImage: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ImageButton.defaultProps = {
  className: '',
};
