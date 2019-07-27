import React from 'react';

import { Breadcrumb } from '../../components';

import './MainLayout.scss';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <main>
        <Breadcrumb />
        <h1>main layout</h1>
      </main>
    </div>
  );
};

export default MainLayout;
