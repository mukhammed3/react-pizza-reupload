import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

import Link from "react-scroll/modules/components/Link";
import "./styles.css";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <Link
          className="link"
          to="pizzas"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Pizzas
        </Link>
        <Link
          className="link"
          to="feature"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Most popular
        </Link>
        <Link
          className="link"
          to="desserts"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Desserts
        </Link>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
