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
    history: { push },
    onClearInfo,
  } = props;

  const directoryTree = prepareDirectoryTree(root);

  const path = getPathArray(pathname);

  const currentPath = path.slice(1);
  let currentDir = [...root];
  let currentPathDetails = { id: 0, name: '', data: [...root] };

  while (currentPath.length) {
    const cur = currentPath.shift();

    const dir = currentDir.find(el => el.name === cur);

    if (dir === undefined || !dir.is_directory) {
      currentPathDetails = { id: 0, name: '', data: [...root] };
      push('/');
      break;
    }

    currentDir = [...dir.children];
    currentPathDetails = { id: dir.id, name: dir.name, data: currentDir };
  }

  // console.log('dispatch element', currentPathDetails);

  const closeFileInfo = () => onClearInfo();

  return (
    <section className="main-layout">
      <SideNav data={directoryTree} />
      <main>
        <Header />
        <Content data={currentPathDetails.data} />
      </main>
      {info && <FileInfoModal element={info} closeFileInfo={closeFileInfo} />}
    </section>
  );
};

MainLayout.propTypes = {
  directory: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
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
