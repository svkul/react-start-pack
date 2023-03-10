import { memo, useMemo } from "react";

import { useAppSelector } from "@app/hooks";
import { getUserAuthData } from "@entities";

import { SidebarItemsList } from "../../model";
import { NavItem } from "../nav-item";

import st from "./nav-list.module.css";

export const NavList = memo(() => {
  const isAuth = useAppSelector(getUserAuthData);

  const sidebarItems = useMemo(() => {
    return SidebarItemsList.filter(item => {
      if (item.authOnly && !isAuth) {
        return false;
      }

      return true;
    });
  }, [isAuth]);

  return (
    <nav className={st.nav}>
      {sidebarItems.map(sidebarItem => (
        <NavItem key={sidebarItem.title} data={sidebarItem} />
      ))}
    </nav>
  );
});
