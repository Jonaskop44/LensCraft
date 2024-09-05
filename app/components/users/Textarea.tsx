import clsx from "clsx";

interface TextareaProps {
  label: string;
  id: string;
  value?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  id,
  value,
  onChange,
  disabled,
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
        <textarea
          id={id}
          disabled={disabled}
          value={value}
          rows={10}
          onChange={onChange}
          className={clsx(
            `
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

export default Textarea;
