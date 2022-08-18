import React from 'react';
import { DatePicker } from '../src';
import { render } from '@testing-library/react';

describe('DatePicker', () => {
  it('DatePicker dropdownClassName', async () => {
    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});


    const { container } = render(
      <DatePicker dropdownClassName="test" />,
    );

    expect(errSpy).toHaveBeenCalledWith(
      'Warning: [antd: DatePicker] `dropdownClassName` is deprecated which will be removed in next major version. Please use `popupClassName` instead.',
    );

    // TODO: Remove this when antd release version
    // expect(container.querySelector('.test')).toBeTruthy();

    errSpy.mockRestore();
  });

  it('DatePicker.RangePicker dropdownClassName', async () => {
    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});


    const { container } = render(
      <DatePicker.RangePicker dropdownClassName="test" />,
    );

    expect(errSpy).toHaveBeenCalledWith(
      'Warning: [antd: RangePicker] `dropdownClassName` is deprecated which will be removed in next major version. Please use `popupClassName` instead.',
    );

    // TODO: Remove this when antd release version
    // expect(container.querySelector('.test')).toBeTruthy();

    errSpy.mockRestore();
  });
});
