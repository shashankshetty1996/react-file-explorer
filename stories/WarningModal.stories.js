import React from 'react';
import { storiesOf } from '@storybook/react';

import { WarningModal } from '../src/components';

import '../src/components/WarningModal/WarningModal.scss';

const styles = {
  background: 'rgb(245,247,249)',
  height: '70vh',
  padding: '24px',
};

storiesOf('WarningModal', module).addWithJSX('Basic warning modal', () => {
  return (
    <div style={styles}>
      <WarningModal title="Are you sure?" onClose={() => {}}>
        modal content here
      </WarningModal>
    </div>
  );
});
