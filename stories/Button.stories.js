import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src/components';

import '../src/components/Button/Button.scss';

import '../src/style/_main.scss';

const styles = {
  background: 'rgb(245,247,249)',
  height: '70vh',
  padding: '24px',
  width: '250px',
};

storiesOf('Button', module).addWithJSX('Basic Button', () => {
  return (
    <div style={styles}>
      <Button onClick={() => console.log('close clicked')}>Create</Button>
    </div>
  );
});
