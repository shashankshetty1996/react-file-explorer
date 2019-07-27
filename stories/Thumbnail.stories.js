import React from 'react';
import { storiesOf } from '@storybook/react';

import { Thumbnail } from '../src/components';

import '../src/components/Thumbnail/Thumbnail.scss';

import '../src/style/_main.scss';

const styles = {
  background: 'rgb(245,247,249)',
  height: '70vh',
  padding: '24px',
};

storiesOf('Thumbnail', module)
  .add('File Thumbnail', () => {
    return (
      <div style={styles}>
        <Thumbnail name="a.pdf" />
      </div>
    );
  })
  .add('Directory Thumbnail', () => {
    return (
      <div style={styles}>
        <Thumbnail name="songs" isDirectory />
      </div>
    );
  });
