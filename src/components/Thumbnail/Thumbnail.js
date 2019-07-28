import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SubMenu from '../SubMenu/SubMenu';
import { getFileExtension } from '../../utils/utils';

import CONSTANTS from '../../Constants';

import FilePlaceholder from '../../assets/images/file-placeholder.png';
import DirectoryPlaceholder from '../../assets/images/directory-placeholder.png';

import './Thumbnail.scss';

const Thumbnail = props => {
  const { element, onSubMenuClick, className, fromModal, ...rest } = props;

  const { name, is_directory: isDirectory } = element;

  const {
    SUB_MENU_OPTIONS: { OPEN, GET_INFO, DELETE },
  } = CONSTANTS;

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

  const containerClass = cx([
    'thumbnail',
    { active: showSubMenu },
    { 'modal-icon': fromModal },
    `${className}`,
  ]);

  const onRightClickHandler = event => {
    event.preventDefault();
    setShowSubMenu(true);
  };

  const subMenuClickHandler = ({ label }) => {
    setShowSubMenu(false);
    onSubMenuClick(element, label);
  };

  const SubMenuOption = [
    { label: OPEN, onClick: subMenuClickHandler, className: cx({ disable: !isDirectory }) },
    { label: GET_INFO, onClick: subMenuClickHandler },
    { label: DELETE, onClick: subMenuClickHandler, className: 'danger' },
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
      {!fromModal && <p className="file-name">{name}</p>}
      {!fromModal && showSubMenu && (
        <div ref={subMenuRef}>
          <SubMenu className="context-menu" data={SubMenuOption} />
        </div>
      )}
    </div>
  );
};

Thumbnail.propTypes = {
  element: PropTypes.object.isRequired,
  onSubMenuClick: PropTypes.func,
  className: PropTypes.string,
  fromModal: PropTypes.bool,
};

Thumbnail.defaultProps = {
  onSubMenuClick: () => {},
  className: '',
  fromModal: false,
};

export default Thumbnail;
