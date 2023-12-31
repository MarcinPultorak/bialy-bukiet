import cx from "classnames";

import { ButtonHTMLAttributes, FC } from "react";
import Spinner from "./Spinner";

type Props = {
  isSubmitting?: boolean;
  variant?: "primary" | "beige";
};
const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({
  isSubmitting,
  ...props
}) => {
  const variants: Record<string, string> = {
    blank: "",
    primary: "bg-yellow-700 text-white hover:bg-yellow-800 px-5",
    beige: "bg-beige3 hover:bg-beige px-5",
  };

  return (
    <button
      {...props}
      className={cx(
        "relative flex h-12 w-full items-center justify-center whitespace-nowrap uppercase transition disabled:bg-opacity-50 disabled:cursor-not-allowed text-sm sm:text-base",
        props.className,
        variants[props.variant ?? "primary"]
      )}
      disabled={props.disabled || isSubmitting}
      style={{
        boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.50)",
      }}
    >
      <>
        <Spinner
          className={cx(
            "absolute h-3 fill-current",
            isSubmitting ? "visible" : "invisible"
          )}
        />
        <span
          className={cx("flex h-full w-full items-center justify-center", {
            invisible: isSubmitting,
          })}
        >
          <span>{props.children}</span>
        </span>
      </>
    </button>
  );
};

export default Button;
