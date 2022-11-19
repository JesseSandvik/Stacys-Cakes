import React from "react";
import "./ExtLink.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
  id?: string;
};

function ExtLink({ children, className, href, id }: Props): React.ReactElement {
  return (
    <a className={className} href={href} id={id}>
      {children}
    </a>
  );
}

ExtLink.defaultProps = {
  className: undefined,
  id: undefined,
};

export default ExtLink;
