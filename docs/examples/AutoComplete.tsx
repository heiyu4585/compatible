import React from 'react';
import { AutoComplete } from '../../src';

export default () => {
  return (
    <AutoComplete
      dropdownClassName='test'
      style={{ width: 200 }}
      options={[
        {
          label: 'bamboo',
          value: 'bamboo',
        },
        {
          label: 'little',
          value: 'little',
        },
      ]}
    />
  );
};
