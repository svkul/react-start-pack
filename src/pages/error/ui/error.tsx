import { memo } from "react";
import { useTranslation } from "react-i18next";

export default memo(() => {
  const { t } = useTranslation("error");

  return (
    <>
      <h1>404</h1>
      <p>{t("error-page")}!</p>
    </>
  );
});
