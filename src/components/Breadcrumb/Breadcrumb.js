import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';

import { getPathArray, getParentDirectory } from '../../utils/utils';

import './Breadcrumb.scss';

const Breadcrumb = props => {
  const {
    history,
    location: { pathname },
  } = props;

  const path = getPathArray(pathname);

  const navigatorTo = index => {
    const url = path.slice(0, index + 1).join('/');
    history.push(url);
  };

  const goUp = () => {
    const parentDirectoryPath = getParentDirectory(pathname);
    history.push(parentDirectoryPath);
  };

  return (
    <section className="breadcrumb">
      <img
        src="http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/icons/representative/arrow-green-circle.png"
        alt="Go up"
        className="go-up"
        onClick={goUp}
      />
      {path.map((link, index) => {
        const linkClass = cx(['nav-link', { active: index === path.length - 1 }]);
        return (
          <Fragment key={index}>
            {index !== 0 && <span className="separator">/</span>}
            <span className={linkClass} role="button" onClick={() => navigatorTo(index)}>
              {link || 'root'}
            </span>
          </Fragment>
        );
      })}
    </section>
  );
};

Breadcrumb.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Breadcrumb);
