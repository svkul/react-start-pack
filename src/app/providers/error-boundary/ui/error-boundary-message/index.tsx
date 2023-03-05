import { FC } from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import { Button } from "@shared";

import st from "./error-boundary-message.module.css";

interface ErrorBoundaryMessageProps {
  className?: string;
}

export const ErrorBoundaryMessage: FC<ErrorBoundaryMessageProps> = ({
  className,
}) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <section className={classnames(st.wrapper, className)}>
      <p className="c-font-color">{t("boundary-error")}</p>

      <Button type="button" onClick={reloadPage}>
        {t("boundary-error-button-text")}
      </Button>
    </section>
  );
};
