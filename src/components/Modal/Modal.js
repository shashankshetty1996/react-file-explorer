import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Modal.scss';

const Modal = props => {
  const { title, children, onClose, className } = props;

  const containerClass = cx('modal', `${className}`);

  return (
    <section className={containerClass}>
      <div className="modal-header">
        <h1 className="modal-title">{title}</h1>
        <img
          src="http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/icons/functional/close.svg"
          alt="close"
          className="modal-close"
          onClick={onClose}
        />
      </div>
      <div className="modal-content">{children}</div>
    </section>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Modal.defaultProps = {
  className: '',
};

export default Modal;
