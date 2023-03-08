import { ChangeEvent, useCallback, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import {
  getAuthError,
  getAuthIsLoading,
  getAuthPassword,
  getAuthUsername,
  IUseDynamicModuleLoader,
  authActions,
  authByUsername,
  authReducer,
  useDynamicReducerLoader,
} from "@features";
import { Button, Input } from "@shared";

import st from "./login-form.module.css";

export interface ILoginFormProps {
  className?: string;
}

const initialStoreModules: IUseDynamicModuleLoader[] = [
  {
    key: "authForm",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    reducer: authReducer,
  },
];

export default memo(({ className }: ILoginFormProps) => {
  const { t } = useTranslation("auth-form");
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const { addStoreDynamicModules, removeStoreDynamicModules } =
    useDynamicReducerLoader(initialStoreModules);

  useEffect(() => {
    addStoreDynamicModules();

    return () => {
      removeStoreDynamicModules();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const error = useSelector(getAuthError);
  const isLoading = useSelector(getAuthIsLoading);
  const password = useSelector(getAuthPassword);
  const username = useSelector(getAuthUsername);

  const handleUserNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      dispatch(authActions.setUserName(value));
    },
    [dispatch],
  );

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      dispatch(authActions.setPassword(value));
    },
    [dispatch],
  );

  const handleLoginClick = useCallback(() => {
    dispatch(authByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <form
      className={classnames(st.wrapper, className)}
      action=""
      autoComplete="false"
      onSubmit={e => e.preventDefault()}
    >
      <Input
        value={username}
        autoFocus
        placeholder={t("auth-form-placeholder-name") || ""}
        onChange={handleUserNameChange}
      />

      <Input
        value={password}
        type="password"
        placeholder={t("auth-form-placeholder-password") || ""}
        onChange={handlePasswordChange}
      />

      {error && <p>{error}</p>}

      <Button
        className={st.button}
        type="button"
        disabled={isLoading}
        onClick={handleLoginClick}
      >
        {t("auth-form-send-btn")}
      </Button>
    </form>
  );
});
