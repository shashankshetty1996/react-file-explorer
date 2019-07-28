import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './SubMenu.scss';

const SubMenu = props => {
  const { data, className, ...rest } = props;

  const containerClass = cx(['sub-menu', `${className}`]);

  return (
    <div className={containerClass} {...rest}>
      {data.map((item, index) => {
        const itemClass = cx(['item', `${item.className}`]);
        return (
          <div className={itemClass} key={index} role="button" onClick={() => item.onClick(item)}>
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

SubMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      className: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

SubMenu.defaultProps = {
  className: '',
};

export default SubMenu;
