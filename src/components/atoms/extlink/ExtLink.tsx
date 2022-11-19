import React from "react";
import "./ExtLink.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
  id?: string;
  rel?: string;
  target?: string;
  title?: string;
};

function ExtLink({
  children,
  className,
  href,
  id,
  rel,
  target,
  title,
}: Props): React.ReactElement {
  return (
    <a
      className={className}
      href={href}
      id={id}
      rel={rel}
      target={target}
      title={title}
    >
      {children}
    </a>
  );
}

ExtLink.defaultProps = {
  className: undefined,
  id: undefined,
  rel: undefined,
  target: undefined,
  title: undefined,
};

export default ExtLink;
