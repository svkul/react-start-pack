import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation("about");

  return <p>{t("about-us-page")}</p>;
};
