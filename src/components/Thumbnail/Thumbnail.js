import React, { useState } from 'react';
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

  const containerClass = cx(['thumbnail', `${className}`]);

  const onRightClickHandler = event => {
    event.preventDefault();
    setShowSubMenu(true);
  };

  const subMenuClickHandler = ({ label }) => {
    setShowSubMenu(false);
    onSubMenuClick(element.id, label);
  };

  const subMenuOutSideClick = () => setShowSubMenu(false);

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
        <SubMenu
          className="context-menu"
          data={SubMenuOption}
          subMenuOutSideClick={subMenuOutSideClick}
        />
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
