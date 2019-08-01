import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { FileInfoModal, Thumbnail, SubMenu } from '../../components';

import CONSTANTS from '../../Constants';

import './FileContainer.scss';

const FileContainer = props => {
  const { element, onSubMenuClick, className, fromModal, ...rest } = props;

  const { name, is_directory: isDirectory } = element;

  const {
    SUB_MENU_OPTIONS: { OPEN, GET_INFO, DELETE },
  } = CONSTANTS;

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

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

  const thumbnailClass = cx(['thumbnail', { active: showSubMenu }, `${className}`]);

  const onRightClickHandler = event => {
    event.preventDefault();
    setShowSubMenu(true);
  };

  const subMenuClickHandler = ({ label }) => {
    setShowSubMenu(false);
    if (label === GET_INFO) {
      setShowDetailModal(true);
    } else {
      onSubMenuClick(element, label);
    }
  };

  const SubMenuOption = [
    { label: OPEN, onClick: subMenuClickHandler, className: cx({ disable: !isDirectory }) },
    { label: GET_INFO, onClick: subMenuClickHandler },
    { label: DELETE, onClick: subMenuClickHandler, className: 'danger' },
  ];

  return (
    <div className="file-container" {...rest} onContextMenu={onRightClickHandler}>
      <Thumbnail name={name} isDirectory={isDirectory} className={thumbnailClass} showName />
      {showSubMenu && (
        <div ref={subMenuRef}>
          <SubMenu className="context-menu" data={SubMenuOption} />
        </div>
      )}
      {showDetailModal && (
        <FileInfoModal element={element} closeFileInfo={() => setShowDetailModal(false)} />
      )}
    </div>
  );
};

FileContainer.propTypes = {
  element: PropTypes.object.isRequired,
  onSubMenuClick: PropTypes.func,
  className: PropTypes.string,
  fromModal: PropTypes.bool,
};

FileContainer.defaultProps = {
  onSubMenuClick: () => {},
  className: '',
  fromModal: false,
};

export default FileContainer;
