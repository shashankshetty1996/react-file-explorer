import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AddField, Thumbnail } from '../../components';
import { getPathArray } from '../../utils/utils';

import './Content.scss';

const Content = props => {
  const {
    directory: { root },
    location: { pathname },
  } = props;

  // Method to add file to directory store.
  const addFile = () => {};

  const path = getPathArray(pathname);
  const data = path.slice(1).reduce(
    (acc, name) => {
      const res = acc.find(el => el.name === name);
      return res ? res.children : [];
    },
    [...root]
  );

  const onSubMenuClickHandler = (id, action) => {};

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
  directory: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  directory: state.directory,
});

export default withRouter(connect(mapStateToProps)(Content));
