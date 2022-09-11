import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  path: string;
};

function NavigationLink({
  children,
  className,
  id,
  path,
}: Props): React.ReactElement {
  return (
    <NavLink className={className} id={id} to={path}>
      {children}
    </NavLink>
  );
}

NavigationLink.defaultProps = {
  className: undefined,
  id: undefined,
};

export default NavigationLink;
