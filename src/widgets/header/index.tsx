import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { useTheme, ETheme, LoginModal } from "@features";
import { Button, EButtonTheme, Icon, EIcons } from "@shared";

import st from "./header.module.css";

interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = memo(({ className }: IHeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();

  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpened(true);
  }, [setIsModalOpened]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpened(false);
  }, [setIsModalOpened]);

  const handleThemeChange = useCallback(() => {
    i18n.changeLanguage(i18n.language === "en" ? "uk" : "en");
  }, [i18n]);

  return (
    <section className={classnames(st.controls, className)}>
      <LoginModal
        isOpened={isModalOpened}
        onOpen={handleOpenModal}
        onClose={handleCloseModal}
      />

      <Button
        className={classnames(st.button, st.lang)}
        theme={EButtonTheme.ICON}
        onClick={handleThemeChange}
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
