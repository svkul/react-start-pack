import { ChangeEvent, useCallback, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import {
  getAuthError,
  getAuthIsLoading,
  getAuthPassword,
  getAuthUsername,
  authActions,
  authByUsername,
  authReducer,
} from "@features";
import {
  IUseDynamicModuleLoader,
  useDynamicReducerLoader,
} from "@app/providers/store";
import { Button, Input } from "@shared";

import st from "./login-form.module.css";
import { useAppDispatch, useAppSelector } from "@app/hooks";

export interface ILoginFormProps {
  className?: string;
}

const initialStoreModules: IUseDynamicModuleLoader[] = [
  {
    key: "authForm",
    reducer: authReducer,
    removeAfterUnmount: true,
  },
];

export default memo(({ className }: ILoginFormProps) => {
  const { t } = useTranslation("auth-form");
  const dispatch = useAppDispatch();

  const { addStoreDynamicModules, removeStoreDynamicModules } =
    useDynamicReducerLoader(initialStoreModules);

  useEffect(() => {
    addStoreDynamicModules();

    return () => {
      removeStoreDynamicModules();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const error = useAppSelector(getAuthError);
  const isLoading = useAppSelector(getAuthIsLoading);
  const password = useAppSelector(getAuthPassword);
  const username = useAppSelector(getAuthUsername);

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

  const handleLoginClick = useCallback(async () => {
    await dispatch(authByUsername({ username, password }));
    // const result = await dispatch(authByUsername({ username, password }));
    // console.log(result);
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
