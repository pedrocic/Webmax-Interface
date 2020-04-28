import React from "react";

import image from "./sidebar-1.jpg";

import { NavLink } from "react-router-dom";
import { SidebarStyle, Background } from "./style";

const Sidebar = (props) => {
  const { routes } = props;

  return (
    <SidebarStyle image={image}>
      <Background />
      <ul>
        {routes.map((prop, key) => {
          return (
            <li key={key}>
              <NavLink to={prop.path} exact activeClassName="active" key={key}>
                {prop.icon}
                <div className="linkName">{prop.name}</div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </SidebarStyle>
  );
};

export default Sidebar;
