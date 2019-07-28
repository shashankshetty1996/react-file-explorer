import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Content, Header, SideNav } from '../../container';
import { FileInfoModal } from '../../components';

import { clearInfoAction } from '../../store/actions/Directory.action';
import { getPathArray, prepareDirectoryTree } from '../../utils/utils';

import './MainLayout.scss';

const MainLayout = props => {
  const {
    directory: { root, info },
    location: { pathname },
    onClearInfo,
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

  const closeFileInfo = () => onClearInfo();

  return (
    <section className="main-layout">
      <SideNav data={directoryTree} />
      <main>
        <Header />
        <Content data={data} />
      </main>
      {info && <FileInfoModal element={info} closeFileInfo={closeFileInfo} />}
    </section>
  );
};

MainLayout.propTypes = {
  directory: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  onClearInfo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  directory: state.directory,
});

const mapDispatchToProps = dispatch => ({
  onClearInfo: () => dispatch(clearInfoAction()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainLayout)
);
