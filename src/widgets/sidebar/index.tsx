import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";

import st from "./sidebar.module.css";

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = memo(({ className }) => {
  const { t } = useTranslation();

  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? st["nav-active"] : undefined)}
      >
        {t("sidebar-home")}
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? st["nav-active"] : undefined)}
      >
        {t("sidebar-about")}
      </NavLink>
    </>
  );
});
