import { ChangeEvent, useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { getLoginState, loginActions, loginByUsername } from "@features";
import { Button, Input } from "@shared";

import st from "./login-form.module.css";

export interface ILoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: ILoginFormProps) => {
  const { t } = useTranslation("auth-form");
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const handleUserNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      dispatch(loginActions.setUserName(value));
    },
    [dispatch],
  );

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const handleLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
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
