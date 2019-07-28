import React from 'react';
import PropTypes from 'prop-types';

import { AddField, Thumbnail } from '../../components';

import './Content.scss';

const Content = props => {
  const { data } = props;

  // Method to add file to directory store.
  const addFile = () => {};

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
  data: PropTypes.array.isRequired,
};

export default Content;
