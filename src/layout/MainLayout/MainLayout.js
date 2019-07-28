import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Content, Header, SideNav } from '../../container';

import { getPathArray, prepareDirectoryTree } from '../../utils/utils';

import './MainLayout.scss';

const MainLayout = props => {
  const {
    directory: { root },
    location: { pathname },
  } = props;

  const directoryTree = prepareDirectoryTree(root);

  const path = getPathArray(pathname);
  const data = path.slice(1).reduce(
    (acc, name) => {
      const res = acc.find(el => el.name === name);
      return res ? res.children : [];
    },
    [...root]
  );

  return (
    <div className="main-layout">
      <SideNav data={directoryTree} />
      <main>
        <Header />
        <Content data={data} />
      </main>
    </div>
  );
};

MainLayout.propTypes = {
  directory: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  directory: state.directory,
});

export default withRouter(connect(mapStateToProps)(MainLayout));
