import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation("home");

  return (
    <div>
      <p>{t("home-page")}</p>
    </div>
  );
};
