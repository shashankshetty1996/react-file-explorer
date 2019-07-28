import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SubMenu from '../SubMenu/SubMenu';
import { getFileExtension } from '../../utils/utils';

import FilePlaceholder from '../../assets/images/file-placeholder.png';
import DirectoryPlaceholder from '../../assets/images/directory-placeholder.png';

import './Thumbnail.scss';

const Thumbnail = props => {
  const { element, onSubMenuClick, className, showName, ...rest } = props;

  const { name, is_directory: isDirectory } = element;

  const [showSubMenu, setShowSubMenu] = useState(false);

  const subMenuRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = event => {
    if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
      setShowSubMenu(false);
    }
  };

  const containerClass = cx(['thumbnail', { active: showSubMenu }, `${className}`]);

  const onRightClickHandler = event => {
    event.preventDefault();
    setShowSubMenu(true);
  };

  const subMenuClickHandler = ({ label }) => {
    setShowSubMenu(false);
    onSubMenuClick(element.id, label);
  };

  const SubMenuOption = [
    { label: 'Open', onClick: subMenuClickHandler },
    { label: 'Get info', onClick: subMenuClickHandler },
    { label: 'Delete', onClick: subMenuClickHandler, className: 'danger' },
  ];

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
    <div className={containerClass} {...rest} onContextMenu={onRightClickHandler}>
      {thumbnail}
      {showName && <p className="file-name">{name}</p>}
      {showSubMenu && (
        <div ref={subMenuRef}>
          <SubMenu className="context-menu" data={SubMenuOption} />
        </div>
      )}
    </div>
  );
};

Thumbnail.propTypes = {
  element: PropTypes.object.isRequired,
  onSubMenuClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  showName: PropTypes.bool,
};

Thumbnail.defaultProps = {
  className: '',
  showName: true,
};

export default Thumbnail;
