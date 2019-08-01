import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';
import Thumbnail from '../Thumbnail/Thumbnail';

import './FileInfoModal.scss';

const FileInfoModal = props => {
  const { element, closeFileInfo } = props;
  const { name, size, creator, date, is_directory: isDirectory } = element;

  return (
    <Modal className="file-info-modal" title="File Info" onClose={closeFileInfo}>
      <Thumbnail
        className="center modal-icon"
        name={name}
        isDirectory={isDirectory}
        showName={false}
      />
      <div className="info-modal-content">
        <div className="details">
          <span className="tag">Name:</span>
          <span className="value">{name}</span>
        </div>
        <div className="details">
          <span className="tag">Size:</span>
          <span className="value">{size}</span>
        </div>
        <div className="details">
          <span className="tag">Creator name:</span>
          <span className="value">{creator}</span>
        </div>
        <div className="details">
          <span className="tag">Created date:</span>
          <span className="value">{date}</span>
        </div>
      </div>
    </Modal>
  );
};

FileInfoModal.propTypes = {
  element: PropTypes.object.isRequired,
  closeFileInfo: PropTypes.func.isRequired,
};

export default FileInfoModal;
