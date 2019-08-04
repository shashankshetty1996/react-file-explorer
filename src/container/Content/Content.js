import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AddField } from '../../components';
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

  // Method to add file to directory store.
  const addFile = () => {};

  const onSubMenuClickHandler = ({ id, name, is_directory: isDirectory }, action) => {
    const { onDeleteContent } = props;

    const {
      SUB_MENU_OPTIONS: { OPEN, DELETE },
    } = CONSTANTS;

    if (action === OPEN && isDirectory) {
      const goTo = pathname === '/' ? name : `${pathname}/${name}`;
      push(goTo);
    } else if (action === DELETE) {
      onDeleteContent(id);
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
