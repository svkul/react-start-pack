import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { useTheme } from "@features";
import { Button, EButtonTheme } from "@shared";

interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <>
      <Button theme={EButtonTheme.SECONDARY} onClick={toggleTheme}>
        {theme}
      </Button>

      <Button
        theme={EButtonTheme.SECONDARY}
        onClick={() => {
          i18n.changeLanguage(i18n.language === "en" ? "uk" : "en");
        }}
      >
        {t("lang-text")}
      </Button>
    </>
  );
});
