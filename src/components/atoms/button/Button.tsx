import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  id?: string;
  onClick(): void;
  type?: string;
};

function Button({
  children,
  className,
  disabled,
  id,
  onClick,
  type,
}: Props): React.ReactElement {
  return (
    <button
      className={className}
      disabled={disabled}
      id={id}
      onClick={onClick}
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
