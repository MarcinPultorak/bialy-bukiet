import cx from "classnames";
import React, { ChangeEvent, forwardRef, ForwardRefRenderFunction, TextareaHTMLAttributes, useEffect, useState } from "react";

import Label from "./Label";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type TextareaProps = {
  label?: string;
  errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  maxLength?: number;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isReset: boolean;
  setIsReset: (val: boolean) => void;
};

const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps & TextareaHTMLAttributes<HTMLTextAreaElement>> = (
  { label, errorMessage, maxLength, onChange, isReset, setIsReset, ...props },
  ref
) => {
  const [textLength, setTextLength] = useState<number>(0);

  useEffect(() => {
    if (isReset) {
      setTextLength(0);
      setIsReset(false);
    }
  }, [isReset]);

  return (
    <>
      <label>
        {label && (
          <div className="flex items-center justify-between">
            <Label required={props.required}>{label}</Label>
            {maxLength ? (
              <span className="mb-2 text-xs text-yellow-700">
                {textLength} / {maxLength}
              </span>
            ) : null}
          </div>
        )}
        <span className={cx("flex items-center")}>
          <textarea
            {...props}
            ref={ref}
            className={cx(
              "w-full appearance-none border bg-transparent px-3 pt-3 focus:outline-none tracking-wider focus:ring-0 resize-none focus:border-yellow-700 placeholder:text-yellow-700 placeholder:italic",
              errorMessage ? "border-red-500 text-red-500" : "border-yellow-700 text-yellow-700"
            )}
            onChange={(e) => {
              setTextLength(e.target.value.length ?? 0);
              onChange?.(e);
            }}
            maxLength={maxLength}
          />
        </span>
      </label>
      {errorMessage && <div className="my-2 text-sm text-red-500">{`${errorMessage}`}</div>}
    </>
  );
};

export default forwardRef(Textarea);
