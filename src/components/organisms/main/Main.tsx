import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function Main({ children, className, id }: Props): React.ReactElement {
  return (
    <main className={className} id={id}>
      {children}
    </main>
  );
}

export default Main;

Main.defaultProps = {
  className: null,
  id: null,
};
