import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Search.scss';

const Search = props => {
  const { value, onChange, className, placeholder, ...rest } = props;

  const containerClass = cx(['search-bar', `${className}`]);

  const [searchValue, setSearchValue] = useState(value);

  const searchFieldChanged = event => {
    const { value: updatedValue } = event.target;
    setSearchValue(updatedValue);
    onChange(updatedValue);
  };

  return (
    <div className={containerClass}>
      <img
        className="search-icon"
        src="http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/icons/functional/search.svg"
        alt="search icon"
      />
      <input
        className="input-field"
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={$event => searchFieldChanged($event)}
        {...rest}
      />
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  value: '',
  className: '',
  placeholder: 'Search for anything',
};

export default Search;
