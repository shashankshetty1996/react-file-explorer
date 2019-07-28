import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AddField, Thumbnail } from '../../components';

import { getInfoAction, deleteDirectoryAction } from '../../store/actions/Directory.action';
import CONSTANTS from '../../Constants';

import './Content.scss';

const Content = props => {
  const {
    data,
    history: { push },
    location: { pathname },
  } = props;

  // Method to add file to directory store.
  const addFile = () => {};

  const onSubMenuClickHandler = ({ id, name, is_directory: isDirectory }, action) => {
    const { onGetContentInfo, onDeleteContent } = props;

    const {
      SUB_MENU_OPTIONS: { OPEN, GET_INFO, DELETE },
    } = CONSTANTS;

    if (action === OPEN && isDirectory) {
      const goTo = pathname === '/' ? name : `${pathname}/${name}`;
      push(goTo);
    } else if (action === GET_INFO) {
      onGetContentInfo(id);
    } else if (action === DELETE) {
      onDeleteContent(id);
    }
  };

  return (
    <section className="content">
      {data.map(el => (
        <Thumbnail
          className="icon"
          key={el.id}
          element={el}
          onSubMenuClick={onSubMenuClickHandler}
        />
      ))}
      <AddField onClick={addFile} />
    </section>
  );
};

Content.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  onGetContentInfo: PropTypes.func.isRequired,
  onDeleteContent: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onGetContentInfo: id => dispatch(getInfoAction(id)),
  onDeleteContent: id => dispatch(deleteDirectoryAction(id)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Content)
);
