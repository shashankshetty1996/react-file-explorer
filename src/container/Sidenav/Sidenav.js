import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import './Sidenav.scss';

const Sidenav = props => {
  const { data, directoryPath } = props;

  const toggleDropDown = event => {
    event.stopPropagation();
    const { target } = event;
    if (target.classList.contains('drop-down-link')) {
      target.classList.toggle('active-drop-down');
    }
  };

  const generateSideNav = (dir, level = 0, id = 0, to = '') => {
    const ulClass = cx(['directory-list', { 'drop-down-menu': id !== 0 }]);
    return (
      <ul className={ulClass} data-parent-id={id}>
        {dir.map(el => {
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
            child = generateSideNav(el.children, level + 1, el.id, linkTo);
          }

          const linkClass = cx([
            'anchor',
            { 'anchor-link': id === 0 },
            { 'drop-down-link': hasChild },
            { 'active-drop-down': el.name === directoryPath[level] },
          ]);
          return (
            <li key={el.id} className={liClass} onClick={toggleDropDown}>
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

  return (
    <aside className="side-nav">
      <h1 className="title">Root</h1>
      {generateSideNav(data)}
    </aside>
  );
};

Sidenav.propTypes = {
  data: PropTypes.array.isRequired,
  directoryPath: PropTypes.array.isRequired,
};

export default Sidenav;
