/* eslint-disable jsx-a11y/role-supports-aria-props */
'use client';
import React, { useState, useRef } from 'react';

interface AutocompleteDropdownProps {
  options: string[];
}

const AutocompleteDropdown: React.FC<AutocompleteDropdownProps> = ({
  options,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredOptions(filtered);
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setShowOptions(false);
  };

  return (
    <div className="dropdown">
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
        aria-expanded={showOptions}
      />
      {showOptions && (
        <div ref={dropdownMenuRef} className="dropdown-menu show">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <button
                key={index}
                className="dropdown-item"
                type="button"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))
          ) : (
            <div className="dropdown-item">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default AutocompleteDropdown;
