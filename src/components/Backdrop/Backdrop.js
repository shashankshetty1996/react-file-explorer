import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.scss';

const Backdrop = ({ onClick }) => <div className="backdrop" role="button" onClick={onClick} />;

Backdrop.propTypes = {
  onClick: PropTypes.func,
};

Backdrop.defaultProps = {
  onClick: () => {},
};

export default Backdrop;
