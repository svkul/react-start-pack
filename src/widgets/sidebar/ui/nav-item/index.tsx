import { memo } from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { ISidebarItem } from "../../model";

import st from "./nav-item.module.css";

interface INavItemProps {
  className?: string;
  data: ISidebarItem;
}

export const NavItem = memo(({ className, data }: INavItemProps) => {
  const { t } = useTranslation();

  return (
    <NavLink
      to={data.to}
      className={({ isActive }) =>
        classnames(
          isActive ? st["nav-active"] : undefined,
          st["nav-item"],
          className,
        )
      }
    >
      {t(data.title)}
    </NavLink>
  );
});
