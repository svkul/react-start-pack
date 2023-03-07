import { ChangeEvent, FC, useCallback, useState } from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import { Button, Input } from "@shared";

import st from "./login-form.module.css";

export interface ILoginFormProps {
  className?: string;
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const { t } = useTranslation("auth-form");

  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const handleUserNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setUserName(value);
    },
    [setUserName],
  );

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setUserPassword(value);
    },
    [setUserPassword],
  );

  return (
    <form
      className={classnames(st.wrapper, className)}
      action=""
      autoComplete="false"
      onSubmit={e => e.preventDefault()}
    >
      <Input
        value={userName}
        autoFocus
        placeholder={t("auth-form-placeholder-name") || ""}
        onChange={handleUserNameChange}
      />

      <Input
        value={userPassword}
        placeholder={t("auth-form-placeholder-password") || ""}
        onChange={handlePasswordChange}
      />

      <Button className={st.button} type="submit">
        {t("auth-form-send-btn")}
      </Button>
    </form>
  );
};
