import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getFileExtension } from '../../utils/utils';

import FilePlaceholder from '../../assets/images/file-placeholder.png';
import DirectoryPlaceholder from '../../assets/images/directory-placeholder.png';

import './Thumbnail.scss';

const Thumbnail = props => {
  const { name, isDirectory, onDoubleClick, className, showName, ...rest } = props;

  const containerClass = cx(['thumbnail', { 'is-directory': isDirectory }, `${className}`]);

  const fileExtension = getFileExtension(name);

  const clicks = [];
  let timeoutPromise;
  const detectDoubleClick = () => {
    clicks.push(new Date().getTime());
    clearTimeout(timeoutPromise);
    timeoutPromise = setTimeout(() => {
      if (clicks.length > 1 && clicks[clicks.length - 1] - clicks[clicks.length - 2] < 250) {
        onDoubleClick();
      }
    }, 250);
  };

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
    <div className={containerClass} onClick={detectDoubleClick} role="button" {...rest}>
      {thumbnail}
      {showName && <p className="file-name">{name}</p>}
    </div>
  );
};

Thumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  isDirectory: PropTypes.bool.isRequired,
  onDoubleClick: PropTypes.func,
  className: PropTypes.string,
  showName: PropTypes.bool,
};

Thumbnail.defaultProps = {
  onDoubleClick: () => {},
  className: '',
  showName: true,
};

export default Thumbnail;
