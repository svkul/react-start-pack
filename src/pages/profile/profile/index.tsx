import { memo, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

import {
  IUseDynamicModuleLoader,
  useDynamicReducerLoader,
} from "@app/providers/store";

import {
  getProfileData,
  getProfileError,
  profileReducer,
  getProfileCountry,
  getProfileIsLoading,
  getProfileName,
  getProfileIsReadOnly,
  profileActions,
  updateProfileData,
} from "@entities";
import { Button, EButtonTheme } from "@shared";
import { useAppDispatch, useAppSelector } from "@app/hooks";

import { ProfileCard } from "../ui";

import st from "./profile.module.css";
import { IProfile } from "@entities/profile/model/types";

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

  const username = useAppSelector(getProfileName);
  const country = useAppSelector(getProfileCountry);
  const isLoading = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);
  const isReadOnly = useAppSelector(getProfileIsReadOnly);

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setIsReadOnly(false));
  }, [dispatch]);

  const handleEditCancel = useCallback(() => {
    dispatch(profileActions.setIsReadOnly(true));
  }, [dispatch]);

  const handleEditValue = useCallback(
    (field: keyof IProfile, value: string) => {
      dispatch(
        profileActions.setNewDataValue({
          country,
          name: username,
          [field]: value,
        }),
      );
    },
    [dispatch, country, username],
  );

  const handleSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  useEffect(() => {
    addStoreDynamicModules();

    return () => {
      removeStoreDynamicModules();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch]);

  return (
    <div>
      <header className={st.header}>
        <p className={st.title}>{t("profile-page")}</p>

        <div className={st.controls}>
          {isReadOnly ? (
            <Button theme={EButtonTheme.SECONDARY} onClick={handleEdit}>
              {t("profile-edit")}
            </Button>
          ) : (
            <div className={st.buttons}>
              <Button theme={EButtonTheme.SECONDARY} onClick={handleSave}>
                {t("profile-save")}
              </Button>

              <Button theme={EButtonTheme.SECONDARY} onClick={handleEditCancel}>
                {t("profile-cancel")}
              </Button>
            </div>
          )}
        </div>
      </header>

      <ProfileCard
        username={username}
        country={country}
        isLoading={isLoading}
        readOnly={isReadOnly}
        error={error}
        handleEditValue={handleEditValue}
      />
    </div>
  );
});
