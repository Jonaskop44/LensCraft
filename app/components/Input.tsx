import clsx from "clsx";
import React from "react";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  required,
  disabled,
  onChange,
  value,
  autoComplete,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900 "
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={autoComplete}
          disabled={disabled}
          required={required}
          onChange={onChange}
          value={value}
          className={clsx(
            `form-input 
                block 
                w-full 
                rounded-md 
                border-0
                outline-none
                py-1.5
                px-2
                text-gray-900
                shadow-sm
                ring-1 
                ring-inset 
                ring-gray-300 
                placeholder:text-gray-400 
                focus:ring-2 
                focus:ring-inset 
                focus:ring-sky-600 
                sm:text-sm 
                sm:leading-6`,
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
};

export default Input;
