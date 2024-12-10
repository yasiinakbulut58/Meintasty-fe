import { FC } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IDatePickerProps {
  setStart: Function;
  start: Date | null;
  className?: string;
  wrapperClassName?: string;
  placeholderText?: string;
}

const DatePickerComponent: FC<IDatePickerProps> = ({
  setStart,
  className,
  start,
  wrapperClassName,
  placeholderText,
}) => {
  return (
    <ReactDatePicker
      selected={start ?? undefined}
      onChange={(date: Date) => setStart(date)}
      id="datepicker"
      className={`datepicker-main ${className ?? ''}`}
      isClearable
      placeholderText={placeholderText}
      wrapperClassName={wrapperClassName}
    />
  );
};

export default DatePickerComponent;
