import React from "react";

type Props = {
  children: React.ReactNode;
  type?: string;
};

function Button({ children, type }: Props): React.ReactElement {
  return <button type={type ? "button" : "submit"}>{children}</button>;
}

Button.defaultProps = {
  type: undefined,
};

export default Button;
