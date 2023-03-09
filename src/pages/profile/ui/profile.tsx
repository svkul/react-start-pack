import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  IUseDynamicModuleLoader,
  useDynamicReducerLoader,
} from "@app/providers/store";

import { getProfileData, ProfileCard, profileReducer } from "@entities";
import { useAppDispatch } from "@app/hooks";

import st from "./profile.module.css";

const initialStoreModules: IUseDynamicModuleLoader[] = [
  {
    key: "profile",
    reducer: profileReducer,
    removeAfterUnmount: true,
  },
];

export default memo(() => {
  const { t } = useTranslation("profile");
  const { addStoreDynamicModules, removeStoreDynamicModules } =
    useDynamicReducerLoader(initialStoreModules);

  const dispatch = useAppDispatch();

  useEffect(() => {
    addStoreDynamicModules();

    return () => {
      removeStoreDynamicModules();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // @ts-ignore
    dispatch(getProfileData());
  }, [dispatch]);

  return (
    <div>
      <p className={st.title}>{t("profile-page")}</p>

      <ProfileCard />
    </div>
  );
});
