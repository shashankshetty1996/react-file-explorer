/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Content, Header, SideNav } from '../../container';

import { setCurrentDirectoryAction } from '../../store/actions/Directory.action';
import { getPathArray, prepareDirectoryTree } from '../../utils/utils';

import './MainLayout.scss';

const MainLayout = props => {
  const {
    directory: { root, currentDirectory },
    location: { pathname },
    history: { push },
    setDirectoryDetails,
  } = props;

  const directoryTree = prepareDirectoryTree(root);

  const path = getPathArray(pathname);

  const currentPath = path;
  let currentDir = [...root];

  let currentPathDetails = null;

  useEffect(() => {
    if (currentPathDetails && currentDirectory.id !== currentPathDetails.id) {
      setDirectoryDetails(currentPathDetails);
    }
  }, [currentPathDetails, pathname]);

  const homePathDetail = { id: 0, name: '', path: '', data: [...root] };

  while (currentPath.length) {
    const cur = currentPath.shift();

    // Check if root directory
    if (cur === '') {
      currentPathDetails = { ...homePathDetail };
    } else {
      const dir = currentDir.find(el => el.name === cur);

      if (dir === undefined || !dir.is_directory) {
        currentPathDetails = { ...homePathDetail };
        push('/');
        break;
      }

      currentDir = [...dir.children];
      const updatedPath = currentPathDetails
        ? `${currentPathDetails.path}/${dir.name}`
        : `/${dir.name}`;
      currentPathDetails = { id: dir.id, name: dir.name, path: updatedPath, data: currentDir };
    }
  }

  return (
    <section className="main-layout">
      <SideNav data={directoryTree} />
      <main>
        <Header />
        <Content data={currentPathDetails.data} />
      </main>
    </section>
  );
};

MainLayout.propTypes = {
  directory: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  setDirectoryDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  directory: state.directory,
});

const mapDispatchToProps = dispatch => ({
  setDirectoryDetails: details => dispatch(setCurrentDirectoryAction(details)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainLayout)
);
