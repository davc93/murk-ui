import { forwardRef, SelectHTMLAttributes } from "react";

type NativeProps = SelectHTMLAttributes<HTMLSelectElement>;

type CustomProps = { placeholder?: string; label?: string };
export const Select = forwardRef<HTMLSelectElement, NativeProps & CustomProps>(
  (
    {
      children,
      className,
      label,
      placeholder,
      ...props
    }: NativeProps & CustomProps,
    ref
  ) => {
    return (
      <label className="select-container">
        <span className="select__label">{label}</span>
        <select
          className={[className, "select"].join(" ")}
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option value="" disabled selected>
              {placeholder}
            </option>
          )}
          {children}
        </select>
      </label>
    );
  }
);
