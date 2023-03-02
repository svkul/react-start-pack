import { FC, memo } from "react";

import { NavLink } from "react-router-dom";

import st from "./sidebar.module.css";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? st["nav-active"] : undefined)}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? st["nav-active"] : undefined)}
      >
        About
      </NavLink>

      <NavLink
        to="/lol"
        className={({ isActive }) => (isActive ? st["nav-active"] : undefined)}
      >
        Lol
      </NavLink>
    </>
  );
});
