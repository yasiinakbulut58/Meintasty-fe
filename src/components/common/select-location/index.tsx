'use client';
import useOutsideDropdown from '@/utils/useOutsideDropdown';
import Image from 'next/image';
import { FC, useMemo, useState } from 'react';

const SelectLocation: FC<ISelectLocationProps> = ({
  defaultValue,
  data,
  title,
  placeholder,
  onChanged,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideDropdown(false);

  const [text, setText] = useState(defaultValue);
  const [selected, setSelected] = useState(false);

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
        className="form-control open-select"
        autoComplete="off"
        placeholder={placeholder}
        value={text}
        onChange={(e) => {
          onChanged?.(null);
          setSelected(false);
          setText(e.target.value);
        }}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        onBlur={() => {
          if (!selected) {
            setText('');
          }
        }}
      />
      <Image
        src="/assets/images/icon/from.png"
        className="img-fluid"
        width={20}
        height={20}
        alt="icon"
      />
      <div
        ref={ref}
        className={`rounded-5 selector-box p-2 ${isComponentVisible ? 'show' : ''}`}
      >
        {title && <h6 className="title">{title}</h6>}
        <ul>
          {filteredOptions?.map((data) => (
            <li key={data.label} className="text-start">
              <a
                role="button"
                className="item"
                tabIndex={0}
                onClick={() => {
                  setSelected(true);
                  setText(data.label);
                  onChanged?.(data);
                  setIsComponentVisible(false);
                }}
              >
                {data.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SelectLocation;
