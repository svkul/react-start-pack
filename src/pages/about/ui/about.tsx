import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Counter } from "@entities";

export default memo(() => {
  const { t } = useTranslation("about");

  return (
    <div>
      <p>{t("about-us-page")}</p>

      <Counter />
    </div>
  );
});
