import { memo, useCallback, useState } from "react";
import classnames from "classnames";
import { useSelector } from "react-redux";

import { Button, EButtonTheme, Input, Loader } from "@shared";
import {
  getProfileCountry,
  getProfileIsLoading,
  getProfileName,
} from "../../model";

import st from "./profile-card.module.css";
import { useTranslation } from "react-i18next";

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard = memo(({ className }: IProfileCardProps) => {
  const { t } = useTranslation("profile");
  const username = useSelector(getProfileName);
  const country = useSelector(getProfileCountry);
  const isLoading = useSelector(getProfileIsLoading);

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEdit = useCallback(() => {
    setIsEdit(true);
  }, []);

  const handleEditCancel = useCallback(() => {
    setIsEdit(false);
  }, []);

  return (
    <section className={classnames(st.wrapper, className)}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={st.content}>
            {username && !isEdit && (
              <p>
                {t("profile-name")}: {username}
              </p>
            )}

            {username && isEdit && (
              <Input
                value={username}
                onChange={e => {
                  e.preventDefault();
                }}
              />
            )}

            {country && !isEdit && (
              <p>
                {t("profile-country")}: {country}
              </p>
            )}

            {country && isEdit && (
              <Input
                value={country}
                onChange={e => {
                  e.preventDefault();
                }}
              />
            )}
          </div>

          {isEdit ? (
            <Button theme={EButtonTheme.SECONDARY} onClick={handleEditCancel}>
              {t("profile-cancel")}
            </Button>
          ) : (
            <Button theme={EButtonTheme.SECONDARY} onClick={handleEdit}>
              {t("profile-edit")}
            </Button>
          )}
        </>
      )}
    </section>
  );
});
