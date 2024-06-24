'use client';
import { createRef, FC, useMemo, useState } from 'react';
import {
  ILocationDropdownRefProps,
  LocationDropdown,
} from './location-dropdown';

const SelectLocation: FC<ISelectLocationProps> = ({
  defaultValue,
  data,
  title,
  placeholder,
  name,
  className,
  onChanged,
}) => {
  const rootRef = createRef<ILocationDropdownRefProps>(); // like this

  const [text, setText] = useState(defaultValue);

  const filteredOptions = useMemo(() => {
    const lowerQuery = text?.toLowerCase();

    return data.filter((item) =>
      item.label.toLowerCase().includes(lowerQuery ?? ''),
    );
  }, [text, data]);
  return (
    <>
      <input
        type="text"
        className={`form-control open-select ${className ?? ''}`}
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        value={text}
        onChange={(e) => {
          onChanged?.(null);
          setText(e.target.value);
        }}
        onClick={() => rootRef?.current?.setIsComponentVisible(true)}
      />
      <LocationDropdown
        ref={rootRef}
        options={filteredOptions}
        title={title}
        onSelected={(selected) => {
          setText(selected?.label);
          onChanged?.(selected);
          rootRef?.current?.setIsComponentVisible(false);
        }}
      />
    </>
  );
};

export default SelectLocation;
