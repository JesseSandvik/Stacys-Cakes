import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  level?: number;
};

function Heading({ children, className, id, level }: Props) {
  return React.createElement(`h${level}`, { className, id }, children);
}

Heading.defaultProps = {
  className: undefined,
  id: undefined,
  level: 6,
};

export default Heading;
