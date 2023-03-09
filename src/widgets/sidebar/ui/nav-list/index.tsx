import { FC, memo } from "react";

import { SidebarItemsList } from "../../model";
import { NavItem } from "../nav-item";

import st from "./nav-list.module.css";

export const NavList: FC = memo(() => {
  return (
    <nav className={st.nav}>
      {SidebarItemsList.map(sidebarItem => (
        <NavItem key={sidebarItem.title} data={sidebarItem} />
      ))}
    </nav>
  );
});
