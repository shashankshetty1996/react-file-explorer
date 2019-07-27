import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../src/components';

import '../src/components/Input/Input.scss';

import '../src/style/_main.scss';

const backgroundStyle = {
  'background-color': '#A8A4A0',
  height: '70vh',
  width: '40vw',
  padding: 20,
  margin: 'auto',
  'box-sizing': 'border-box',
};

storiesOf('Input', module).addWithJSX('Input', () => {
  const type = 'text';
  const value = '';
  const name = 'name';
  const placeholder = 'Enter name here';
  const onChange = e => {};
  return (
    <div style={backgroundStyle}>
      <Input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} />
    </div>
  );
});
