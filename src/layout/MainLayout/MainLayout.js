import React from 'react';

import { Header, SideNav } from '../../container';

import './MainLayout.scss';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <SideNav />
      <main>
        <Header />
        <h1>main layout</h1>
      </main>
    </div>
  );
};

export default MainLayout;
