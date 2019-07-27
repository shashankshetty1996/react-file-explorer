import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Search.scss';

const Search = props => {
  const { name, value, onChange, className, placeholder } = props;

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
        name={name}
        value={searchValue}
        onChange={$event => searchFieldChanged($event)}
      />
    </div>
  );
};

Search.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  className: '',
  placeholder: 'Search for anything',
};

export default Search;
