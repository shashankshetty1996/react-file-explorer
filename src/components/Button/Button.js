import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.scss';

const Button = ({ className, onClick, disabled, ...rest }) => {
  const buttonClass = cx(['btn', { disabled }, `${className}`]);
  return (
    <button className={buttonClass} onClick={onClick} {...rest}>
      {rest.children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  disabled: false,
};

export default Button;
