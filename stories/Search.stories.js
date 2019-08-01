import React from 'react';
import { storiesOf } from '@storybook/react';

import { Search } from '../src/components';

import '../src/components/Search/Search.scss';

import '../src/style/_main.scss';

const styles = {
  background: 'rgb(245,247,249)',
  height: '70vh',
  padding: '24px',
};

storiesOf('Search', module).addWithJSX('File Search', () => {
  return (
    <div style={styles}>
      <Search onChange={value => console.log(value)} />
    </div>
  );
});
