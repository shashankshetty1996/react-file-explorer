import React from 'react';
import { storiesOf } from '@storybook/react';

import { AddField } from '../src/components';

const styles = {
  background: 'rgb(245,247,249)',
  height: '70vh',
  padding: '24px',
};

storiesOf('AddField', module).add('File AddField', () => {
  return (
    <div style={styles}>
      <AddField onClick={() => console.log('clicked')} />
    </div>
  );
});
