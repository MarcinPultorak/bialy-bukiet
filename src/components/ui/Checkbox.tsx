import { ForwardRefRenderFunction, InputHTMLAttributes, forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export type InputProps = {
  label: string;
  errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
};

const Checkbox: ForwardRefRenderFunction<HTMLInputElement, InputProps & InputHTMLAttributes<HTMLInputElement>> = ({ label, errorMessage, ...props }, ref) => {
  return (
    <>
      <label className="w-full flex flex-shrink-0 space-x-4">
        <input
          {...props}
          ref={ref}
          type="checkbox"
          className="w-4 h-4 sm:w-6 sm:h-6 checked:text-yellow-700 focus:ring-0 focus:outline-none focus:ring-offset-0 border border-yellow-700"
        />
        <span className="text-yellow-700 italic text-xs">{label}</span>
      </label>
      {errorMessage && <div className="my-2 ml-10 text-xs text-red-500">{`${errorMessage}`}</div>}
    </>
  );
};

export default forwardRef(Checkbox);
