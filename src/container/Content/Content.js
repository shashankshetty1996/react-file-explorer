import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AddField, Thumbnail } from '../../components';

import './Content.scss';

const Content = props => {
  const { root } = props.directory;

  // Method to add file to directory store.
  const addFile = () => {};

  // const data = [...root];

  return (
    <section className="content">
      {root.map(el => (
        <Thumbnail className="icon" key={el.id} isDirectory={el.is_directory} name={el.name} />
      ))}
      <AddField onClick={addFile} />
    </section>
  );
};

Content.propTypes = {
  directory: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  directory: state.directory,
});

export default connect(mapStateToProps)(Content);
