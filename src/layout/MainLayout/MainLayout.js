import React from 'react';

import { Content, Header, SideNav } from '../../container';

import './MainLayout.scss';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <SideNav />
      <main>
        <Header />
        <Content />
      </main>
    </div>
  );
};

export default MainLayout;
