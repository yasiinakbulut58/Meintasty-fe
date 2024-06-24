'use client';
import useOutsideDropdown from '@/utils/useOutsideDropdown';
import React, { FC, forwardRef, Ref, useImperativeHandle } from 'react';

export interface ILocationDropdownRefProps {
  setIsComponentVisible: (value: boolean) => void;
}

interface ILocationDropdownProps {
  title?: string;
  options: ILocationProps[];
  onSelected?: (item: ILocationProps | null) => void;
}

export const LocationDropdown = forwardRef<
  ILocationDropdownRefProps,
  ILocationDropdownProps
>(({ options, title, onSelected }, ref) => {
  const {
    ref: dropdownRef,
    isComponentVisible,
    setIsComponentVisible,
  } = useOutsideDropdown(false);

  useImperativeHandle(ref, () => ({
    setIsComponentVisible: (isVisible: boolean) => {
      setIsComponentVisible(isVisible);
    },
  }));

  return (
    <div
      ref={dropdownRef}
      className={`rounded-5 selector-box p-2 ${isComponentVisible && options.length > 0 ? 'show' : ''}`}
    >
      {title && <h6 className="title">{title}</h6>}
      <ul>
        {options?.map((data) => (
          <li key={data.label} className="text-start">
            <a
              role="button"
              className="item"
              tabIndex={0}
              onClick={() => {
                onSelected?.(data);
                setIsComponentVisible(false);
              }}
            >
              {data.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});
