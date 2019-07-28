import React from 'react';
import { storiesOf } from '@storybook/react';

import { SubMenu } from '../src/components';

import '../src/components/SubMenu/SubMenu.scss';

import '../src/style/_main.scss';

const styles = {
  background: 'rgb(245,247,249)',
  height: '70vh',
  padding: '24px',
};

storiesOf('SubMenu', module).add('Basic SubMenu', () => {
  const logger = (...rest) => console.log(rest);
  const data = [
    { label: 'Open', onClick: logger },
    { label: 'Get info', onClick: logger },
    { label: 'Delete', onClick: logger, className: 'danger' },
  ];
  return (
    <div style={styles}>
      <SubMenu data={data} id={1} />
    </div>
  );
});
