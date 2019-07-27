import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getFileExtension } from '../../utils/utils';

import FilePlaceholder from '../../assets/images/file-placeholder.png';
import DirectoryPlaceholder from '../../assets/images/directory-placeholder.png';

import './Thumbnail.scss';

const Thumbnail = props => {
  const { name, isDirectory, className } = props;

  const containerClass = cx(['thumbnail', `${className}`]);

  const fileExtension = getFileExtension(name);

  let thumbnail = (
    <div className="file-thumbnail">
      <img src={FilePlaceholder} alt={`${fileExtension} file`} />
      <span className="file-extension">.{fileExtension}</span>
    </div>
  );

  if (isDirectory) {
    thumbnail = <img src={DirectoryPlaceholder} alt={`${fileExtension} folder`} />;
  }

  return (
    <div className={containerClass}>
      {thumbnail}
      <p className="file-name">{name}</p>
    </div>
  );
};

Thumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  isDirectory: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

Thumbnail.defaultProps = {
  className: '',
};

export default Thumbnail;
