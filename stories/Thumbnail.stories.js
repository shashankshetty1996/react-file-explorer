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
  .addWithJSX('File Thumbnail', () => {
    return (
      <div style={styles}>
        <Thumbnail name="a.pdf" />
      </div>
    );
  })
  .addWithJSX('Directory Thumbnail', () => {
    return (
      <div style={styles}>
        <Thumbnail name="songs" isDirectory />
      </div>
    );
  })
  .addWithJSX('File Thumbnail without name', () => {
    return (
      <div style={styles}>
        <Thumbnail name="a.pdf" showName={false} />
      </div>
    );
  });
