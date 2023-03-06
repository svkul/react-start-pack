import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { useTheme, ETheme } from "@features";
import { Button, EButtonTheme, Icon, EIcons } from "@shared";

import st from "./header.module.css";

interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = memo(({ className }: IHeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();

  return (
    <section className={classnames(st.controls, className)}>
      <Button
        className={classnames(st.button, st.lang)}
        theme={EButtonTheme.ICON}
        onClick={() => {
          i18n.changeLanguage(i18n.language === "en" ? "uk" : "en");
        }}
      >
        <Icon
          name={i18n.language === "uk" ? EIcons.USA : EIcons.UA}
          width={24}
          height={16}
        />
      </Button>

      <Button
        className={classnames(st.button, { [st.light]: theme === ETheme.DARK })}
        theme={EButtonTheme.ICON}
        onClick={toggleTheme}
      >
        <Icon
          name={theme === ETheme.DARK ? EIcons.SUN : EIcons.MOON}
          size={24}
        />
      </Button>
    </section>
  );
});
