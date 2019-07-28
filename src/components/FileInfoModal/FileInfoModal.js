import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';
import Thumbnail from '../Thumbnail/Thumbnail';

import './FileInfoModal.scss';

const FileInfoModal = props => {
  const { element, closeFileInfo } = props;
  return (
    <Modal className="file-info-modal" title="File Info" onClose={closeFileInfo}>
      <Thumbnail className="center" element={element} fromModal />
      <div className="info-modal-content">
        <div className="details">
          <span className="tag">Name:</span>
          <span className="value">{element.name}</span>
        </div>
        <div className="details">
          <span className="tag">Size:</span>
          <span className="value">{element.size}</span>
        </div>
        <div className="details">
          <span className="tag">Creator name:</span>
          <span className="value">{element.creator}</span>
        </div>
        <div className="details">
          <span className="tag">Created date:</span>
          <span className="value">{element.date}</span>
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
