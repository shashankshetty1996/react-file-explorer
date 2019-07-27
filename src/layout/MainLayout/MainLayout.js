import React from 'react';

import { Header } from '../../container';

import './MainLayout.scss';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <main>
        <Header />
        <h1>main layout</h1>
      </main>
    </div>
  );
};

export default MainLayout;
