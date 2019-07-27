import React from 'react';

import { Breadcrumb, Search } from '../../components';

import './Header.scss';

const Header = props => {
  const searchFiles = value => {
    // file to be searched
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

export default Header;
