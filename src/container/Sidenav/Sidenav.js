import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import './Sidenav.scss';

const generateSideNav = (data, id = 0, to = '') => {
  const ulClass = cx(['directory-list', { 'drop-down-menu': id !== 0 }]);
  return (
    <ul className={ulClass} data-parent-id={id}>
      {data.map(el => {
        let child = null;
        // Checking for child directory.
        const hasChild = el.children.length !== 0;

        // list tag classes
        const liClass = cx([
          { links: id === 0 },
          { 'sub-links': id !== 0 },
          { 'drop-down': hasChild },
        ]);

        // Next link and parent link for child links
        const linkTo = `${to}/${el.name}`;

        // Add child component if directory present under it.
        if (hasChild) {
          child = generateSideNav(el.children, el.id, linkTo);
        }

        const linkClass = cx(['anchor', { 'anchor-link': id === 0 }]);
        return (
          <li key={el.id} className={liClass}>
            <Link className={linkClass} to={linkTo}>
              {el.name}
            </Link>
            {child}
          </li>
        );
      })}
    </ul>
  );
};

const Sidenav = props => {
  const { data } = props;

  return (
    <aside className="side-nav">
      <h1 className="title">
        <Link to="/">Root</Link>
      </h1>
      {generateSideNav(data)}
    </aside>
  );
};

Sidenav.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Sidenav;
