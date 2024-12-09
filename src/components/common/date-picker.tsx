import { FC } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IDatePickerProps {
  setStart: Function;
  start: Date | null;
}

const DatePickerComponent: FC<IDatePickerProps> = ({ setStart, start }) => {
  return (
    <ReactDatePicker
      selected={start ?? undefined}
      onChange={(date: Date) => setStart(date)}
      id="datepicker"
      className="datepicker-main form-control w-100"
      isClearable
    />
  );
};

export default DatePickerComponent;
