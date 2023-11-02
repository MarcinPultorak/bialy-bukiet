import cx from "classnames";
import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import Label from "./Label";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export type InputProps = {
  label?: string;
  variant?: "primary" | "secondary";
  errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
};

const FormInput: ForwardRefRenderFunction<HTMLInputElement, InputProps & InputHTMLAttributes<HTMLInputElement>> = ({ label, errorMessage, ...props }, ref) => {
  const variants: Record<string, string> = {
    primary: "bg-black",
    secondary: "bg-sky-800",
  };

  return (
    <div>
      <div className="relative z-0">
        <input
          {...props}
          ref={ref}
          type="text"
          id="standard_error"
          aria-describedby="standard_error_help"
          className="block pb-1 px-0 w-full text-base text-yellow-700 bg-transparent border-0 border-b border-yellow-700 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-900 peer"
          placeholder=" "
        />
        <label
          htmlFor="standard_error"
          className="absolute text-base italic tracking-wider text-yellow-700 duration-300 transform -translate-y-6 scale-90 top-2 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      </div>

      {errorMessage && (
        <p id="standard_error_help" className="mt-1 text-sm text-red-500">
          {`${errorMessage}`}
        </p>
      )}
    </div>
  );
};

export default forwardRef(FormInput);
