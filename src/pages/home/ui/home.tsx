import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation("home");

  return <p>{t("home-page")}</p>;
};
