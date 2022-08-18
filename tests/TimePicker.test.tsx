import React from 'react';
import { TimePicker } from '../src';
import { render } from '@testing-library/react';

describe('TimePicker', () => {


  it('TimePicker dropdownClassName', async () => {
    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const { container } = render(
      <TimePicker
        dropdownClassName="test"
      />,
    );

    expect(errSpy).toHaveBeenCalledWith(
      "Warning: [Compatible: TimePicker] 'dropdownClassName' is deprecated. Please use 'popupClassName' instead.",
    );

    // TODO: Remove this when antd release version
    expect(container.querySelector('.test')).toBeTruthy();

    errSpy.mockRestore();
  });

  it('TimePicker.RangePicker dropdownClassName', async () => {
    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const { container } = render(
      <TimePicker.RangePicker
        dropdownClassName="test"
      />,
    );

    expect(errSpy).toHaveBeenCalledWith(
      "Warning: [Compatible: RangePicker] 'dropdownClassName' is deprecated. Please use 'popupClassName' instead.",
    );

    // TODO: Remove this when antd release version
    // expect(container.querySelector('.test')).toBeTruthy();

    errSpy.mockRestore();
  });
});
