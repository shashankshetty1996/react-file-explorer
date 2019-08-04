import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Backdrop from '../Backdrop/Backdrop';

const WarningModal = props => {
  const { title, onClose, children, className } = props;

  const containerClass = cx(['warning-modal', `${className}`]);

  return (
    <Fragment>
      <Backdrop onClick={onClose} />
      <section className={containerClass}>
        <header className="header">
          <h1 className="title">{title}</h1>
          <img
            src="http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/icons/functional/close.svg"
            alt="close"
            onClick={onClose}
          />
        </header>
        <article className="content">{children}</article>
      </section>
    </Fragment>
  );
};

WarningModal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

WarningModal.defaultProps = {
  className: '',
};

export default WarningModal;
