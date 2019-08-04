import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Tabs.scss';

const Tabs = props => {
  const { tabs, onTabClick, defaultSelected, className } = props;

  const containerClass = cx(['tabs', `${className}`]);

  return (
    <div className={containerClass}>
      {tabs.map((tab, index) => {
        const tabClass = cx(['tab', { active: tab === defaultSelected }]);
        return (
          <span className={tabClass} onClick={() => onTabClick(tab)} role="button" key={index}>
            {tab}
          </span>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  onTabClick: PropTypes.func.isRequired,
  defaultSelected: PropTypes.string,
  className: PropTypes.string,
};

Tabs.defaultProps = {
  defaultSelected: '',
  className: '',
};

export default Tabs;
