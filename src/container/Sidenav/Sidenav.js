import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Sidenav.scss';

const generateSideNav = (data, level = 0) => {
  return (
    <ul data-level={level}>
      {data.map(el => {
        let child = null;
        const hasChild = el.children.length !== 0;
        const liClass = cx(['directory-links', { 'drop-down': hasChild }]);
        if (hasChild) {
          child = generateSideNav(el.children, level + 1);
        }
        return (
          <li key={el.id} className={liClass}>
            {el.name}
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
      <h1 className="title">Root</h1>
      {generateSideNav(data)}
    </aside>
  );
};

Sidenav.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Sidenav;
