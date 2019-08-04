import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';

import { AddContentForm, AddField, Button, Modal, WarningModal } from '../../components';
import FileContainer from '../FileContainer/FileContainer';

import { deleteDirectoryAction } from '../../store/actions/Directory.action';
import CONSTANTS from '../../Constants';

import './Content.scss';

const Content = props => {
  const {
    data,
    history: { push },
    location: { pathname },
    showAddContent,
  } = props;

  const [showAddModal, setShowAddModal] = useState(false);
  const [warningModalContent, setWarningModal] = useState(null);

  // Method to add file to directory store.
  const addFile = () => setShowAddModal(true);

  const addModalClose = () => setShowAddModal(false);

  const closeWarningModal = () => setWarningModal(null);

  const onSubMenuClickHandler = ({ id, name, is_directory: isDirectory }, action) => {
    const {
      SUB_MENU_OPTIONS: { OPEN, DELETE },
    } = CONSTANTS;

    if (action === OPEN && isDirectory) {
      const goTo = pathname === '/' ? name : `${pathname}/${name}`;
      push(goTo);
    } else if (action === DELETE) {
      setWarningModal(warningModalRender(`Are you sure you want to delete ${name}`, true, id));
    }
  };

  const confirmDelete = id => {
    const { onDeleteContent } = props;
    onDeleteContent(id);
  };

  const warningModalRender = (message, showConfirm = false, ...rest) => {
    const closeBtnClass = cx({ 'w-50': showConfirm });
    const confirmBtnClass = cx(['danger-bg', { 'w-50': showConfirm }]);
    return (
      <div className="alert-text">
        <p className="info">{message}</p>

        <div className="warning-footer">
          <Button className={closeBtnClass} onClick={closeWarningModal}>
            Close
          </Button>
          {showConfirm && (
            <Button className={confirmBtnClass} onClick={() => confirmDelete(rest)}>
              Confirm
            </Button>
          )}
        </div>
      </div>
    );
  };

  const onContentCreated = content => {
    const {
      WARNING_MODAL: { FILE_EXIST, FILE_EXTENSION_MISSING },
    } = CONSTANTS;

    addModalClose();

    const currentDirFiles = data.map(el => el.name.toLowerCase());
    if (currentDirFiles.indexOf(content.name.toLowerCase()) > -1) {
      setWarningModal(warningModalRender(FILE_EXIST));
    } else if (!content.isDirectory && content.name.split('.').length === 1) {
      setWarningModal(warningModalRender(FILE_EXTENSION_MISSING));
    } else {
      setWarningModal('LGTM');
    }
  };

  return (
    <section className="content">
      {data.map(el => (
        <FileContainer
          className="icon"
          key={el.id}
          element={el}
          onSubMenuClick={onSubMenuClickHandler}
        />
      ))}
      {showAddContent && <AddField onClick={addFile} />}
      {showAddModal && (
        <Modal className="add-modal" title="Create New" onClose={addModalClose}>
          <AddContentForm onCreate={onContentCreated} />
        </Modal>
      )}
      {warningModalContent && (
        <WarningModal onClose={closeWarningModal}>{warningModalContent}</WarningModal>
      )}
    </section>
  );
};

Content.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  onDeleteContent: PropTypes.func.isRequired,
  showAddContent: PropTypes.bool,
};

Content.defaultProps = {
  showAddContent: true,
};

const mapDispatchToProps = dispatch => ({
  onDeleteContent: id => dispatch(deleteDirectoryAction(id)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Content)
);
