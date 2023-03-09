import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  IUseDynamicModuleLoader,
  useDynamicReducerLoader,
} from "@app/providers/store";

import { profileReducer } from "@entities";

const initialStoreModules: IUseDynamicModuleLoader[] = [
  {
    key: "profile",
    // @ts-ignore
    reducer: profileReducer,
    removeAfterUnmount: true,
  },
];

export default memo(() => {
  const { t } = useTranslation("profile");
  const { addStoreDynamicModules, removeStoreDynamicModules } =
    useDynamicReducerLoader(initialStoreModules);

  useEffect(() => {
    addStoreDynamicModules();

    return () => {
      removeStoreDynamicModules();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>{t("profile-page")}</p>
    </div>
  );
});
