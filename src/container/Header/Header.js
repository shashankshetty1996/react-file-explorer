import React from 'react';
import PropTypes from 'prop-types';

import { Breadcrumb, Search } from '../../components';

import './Header.scss';

const Header = props => {
  const { onSearch } = props;

  const searchFiles = value => {
    onSearch(value);
  };

  return (
    <header className="header">
      <nav className="directory-path">
        <Breadcrumb />
      </nav>
      <section>
        <Search onChange={searchFiles} />
      </section>
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
