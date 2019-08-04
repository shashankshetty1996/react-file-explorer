import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tabs } from '../src/components';

import '../src/components/Tabs/Tabs.scss';

const styles = {
  background: 'rgb(245,247,249)',
  height: '70vh',
  padding: '24px',
  width: '250px',
};

storiesOf('Tabs', module)
  .addWithJSX('File tab selected', () => {
    const tabs = ['File', 'Folder'];
    const defaultSelected = 'File';
    return (
      <div style={styles}>
        <Tabs
          tabs={tabs}
          defaultSelected={defaultSelected}
          onTabClick={value => console.log(value)}
        />
      </div>
    );
  })
  .addWithJSX('Folder tab selected', () => {
    const tabs = ['File', 'Folder'];
    const defaultSelected = 'Folder';
    return (
      <div style={styles}>
        <Tabs
          tabs={tabs}
          defaultSelected={defaultSelected}
          onTabClick={value => console.log(value)}
        />
      </div>
    );
  });
