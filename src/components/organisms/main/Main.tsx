import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

function Main({ children, className }: Props): React.ReactElement {
  return <main className={className}>{children}</main>;
}

export default Main;
