import classnames from "classnames";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";

import st from "./sidebar.module.css";

export const Sidebar: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <nav className={st.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          classnames(isActive ? st["nav-active"] : undefined, st["nav-item"])
        }
      >
        {t("sidebar-home")}
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          classnames(isActive ? st["nav-active"] : undefined, st["nav-item"])
        }
      >
        {t("sidebar-about")}
      </NavLink>
    </nav>
  );
});
