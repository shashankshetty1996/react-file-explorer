import React from 'react';
import PropTypes from 'prop-types';

import './AddField.scss';

const AddField = props => {
  const { onClick } = props;
  return (
    <img
      src="http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/Group%2011.png"
      alt="add"
      className="add-field"
      onClick={onClick}
    />
  );
};

AddField.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddField;
