import React from 'react';
import { storiesOf } from '@storybook/react';

import { Modal } from '../src/components';

import '../src/components/Modal/Modal.scss';

import '../src/style/_main.scss';

const styles = {
  background: 'rgb(245,247,249)',
  height: '70vh',
  padding: '24px',
};

storiesOf('Modal', module).add('Basic Modal', () => {
  return (
    <div style={styles}>
      <Modal title="File Info" onClose={() => console.log('close clicked')}>
        modal content here
      </Modal>
    </div>
  );
});
