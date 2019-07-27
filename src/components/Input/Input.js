import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Input.scss';

const Input = props => {
  const { type, value, name, placeholder, onChange, className, ...rest } = props;

  const containerClass = cx(['input-bar', `${className}`]);

  const [inputState, setInputState] = useState(value);

  const onChangeHandler = e => {
    setInputState(e.target.value);
    onChange(e);
  };

  return (
    <input
      className={containerClass}
      type={type}
      value={inputState}
      name={name}
      placeholder={placeholder}
      onChange={onChangeHandler}
      {...rest}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  className: '',
};

export default Input;
