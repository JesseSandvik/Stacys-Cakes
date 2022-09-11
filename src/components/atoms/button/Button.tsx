import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  id?: string;
  type?: string;
};

function Button({
  children,
  className,
  disabled,
  id,
  type,
}: Props): React.ReactElement {
  return (
    <button
      className={className}
      disabled={disabled}
      id={id}
      type={type === "submit" ? "submit" : "button"}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: undefined,
  disabled: false,
  id: undefined,
  type: "button",
};

export default Button;
