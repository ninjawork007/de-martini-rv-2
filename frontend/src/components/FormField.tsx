import React from "react";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  label: React.ReactNode;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
  options?: {
    label: string;
    value: string;
  }[];
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  error,
  placeholder,
  label,
  type,
  options,
  ...rest
}) => {
  const { register, setValue } = useFormContext();

  return (
    <div className="my-3">
      {type === "checkbox" ? (
        <div className="flex gap-1">
          <input
            placeholder={placeholder}
            type={type}
            {...register(name)}
            onChange={(e) => setValue(name, e.target.checked)}
            {...rest}
          />
          <label className="text-black">{label}</label>
        </div>
      ) : type === "select" ? (
        <div className="flex select-wrapper flex-col gap-1">
          <label className="text-607D8B text-sm">{label}</label>
          <select className="input-box px-4 py-3" {...register(name)} {...rest}>
            {options?.map(({ value, label }) => (
              <option key={label} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <label className="text-607D8B text-sm">{label}</label>
          <input
            className="input-box px-4 py-3"
            placeholder={placeholder}
            type={type}
            {...register(name)}
            {...rest}
          />
        </div>
      )}

      <p className="text-FF4000">{error}</p>
    </div>
  );
};

export default FormField;
