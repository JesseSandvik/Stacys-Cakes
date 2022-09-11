import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  path: string;
};

function NavigationLink({ children, path }: Props): React.ReactElement {
  return <NavLink to={path}>{children}</NavLink>;
}

export default NavigationLink;
