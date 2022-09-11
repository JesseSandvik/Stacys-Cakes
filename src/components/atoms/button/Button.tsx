import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  type?: string;
};

function Button({ children, className, id, type }: Props): React.ReactElement {
  return (
    <button className={className} id={id} type={type ? "button" : "submit"}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: undefined,
  id: undefined,
  type: undefined,
};

export default Button;
