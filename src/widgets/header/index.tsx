import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { useTheme, ETheme, LoginModal } from "@features";
import { Button, EButtonTheme, Icon, EIcons } from "@shared";
import {
  getIsAuthPopupOpen,
  getUserAuthData,
  popupsActions,
  userActions,
} from "@entities";
import { useAppDispatch, useAppSelector } from "@app/hooks";

import st from "./header.module.css";

interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = memo(({ className }: IHeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const authData = useAppSelector(getUserAuthData);
  const isModalOpened = useAppSelector(getIsAuthPopupOpen);

  const handleOpenModal = useCallback(() => {
    dispatch(popupsActions.setIsAuthPopupOpen(true));
  }, [dispatch]);

  const handleCloseModal = useCallback(() => {
    dispatch(popupsActions.setIsAuthPopupOpen(false));
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const handleThemeChange = useCallback(() => {
    i18n.changeLanguage(i18n.language === "en" ? "uk" : "en");
  }, [i18n]);

  return (
    <section className={classnames(st.controls, className)}>
      {authData ? (
        <Button theme={EButtonTheme.SECONDARY} onClick={handleLogout}>
          {t("auth-logout")}
        </Button>
      ) : (
        <LoginModal
          isOpened={isModalOpened}
          onOpen={handleOpenModal}
          onClose={handleCloseModal}
        />
      )}

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
