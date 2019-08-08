import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, className }) => (
  <a href="#" className={String(className)}>
    {text}
  </a>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Button;
