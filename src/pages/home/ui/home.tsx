import { memo } from "react";
import { useTranslation } from "react-i18next";

export default memo(() => {
  const { t } = useTranslation("home");

  return (
    <div>
      <p>{t("home-page")}</p>
    </div>
  );
});
