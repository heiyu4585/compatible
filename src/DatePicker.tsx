import * as React from 'react';
import { DatePicker } from 'antd';
import warning from 'rc-util/lib/warning';

type DatePickerProps = Parameters<typeof DatePicker>[0];
type DatePickerRef = DatePickerProps['ref'];

type CompatibleDatePickerProps = DatePickerProps & {
  /** @deprecated Please use `popupClassName` instead. */
  dropdownClassName?: string;
};

const CompatibleDatePicker = React.forwardRef(
  (
    { dropdownClassName, popupClassName,...restProps }: CompatibleDatePickerProps,
    ref: DatePickerRef,
  ) => {
    warning(
      !dropdownClassName,
      `[Compatible: DatePicker] 'dropdownClassName' is deprecated. Please use 'popupClassName' instead.`,
    );

    return (
      <DatePicker {...restProps} popupClassName={popupClassName || dropdownClassName} ref={ref} />
    );
  },
);

if (process.env.NODE_ENV !== 'production') {
  CompatibleDatePicker.displayName = 'CompatibleDatePicker';
}

export default CompatibleDatePicker;
