import React, { FC, ReactNode } from "react";

type LabelProps = {
  required?: boolean;
  children: ReactNode;
};

const Label: FC<LabelProps> = ({ required, children }) => {
  return (
    <span className="mb-2 flex cursor-pointer items-start">
      <span className="block italic text-yellow-700 tracking-wider">{children}</span>
    </span>
  );
};

export default Label;
