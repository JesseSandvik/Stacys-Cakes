import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  type?: string;
};

function Button({ children, className, type }: Props): React.ReactElement {
  return (
    <button className={className} type={type ? "button" : "submit"}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: undefined,
  type: undefined,
};

export default Button;
