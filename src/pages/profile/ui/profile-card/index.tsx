import { memo } from "react";
import classnames from "classnames";

import { Input, Loader } from "@shared";

import st from "./profile-card.module.css";
import { useTranslation } from "react-i18next";
import { IProfile } from "@entities/profile/model/types";

interface IProfileCardProps {
  className?: string;
  username: string;
  country: string;
  isLoading: boolean;
  readOnly: boolean;
  error: string;
  handleEditValue: (field: keyof IProfile, value: string) => void;
}

export const ProfileCard = memo(
  ({
    className,
    username,
    country,
    isLoading = false,
    readOnly = true,
    error,
    handleEditValue,
  }: IProfileCardProps) => {
    const { t } = useTranslation("profile");

    if (error) {
      return (
        <section className={classnames(st.wrapper, className)}>
          <div className={st.content}>{error && <p>{error}</p>}</div>
        </section>
      );
    }

    return (
      <section className={classnames(st.wrapper, className)}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className={st.content}>
              <p>
                {t("profile-name")}: {username && readOnly && username}
              </p>

              {username && !readOnly && (
                <Input
                  value={username}
                  onChange={e => {
                    handleEditValue("name", e.target.value);
                  }}
                />
              )}

              <p>
                {t("profile-country")}: {country && readOnly && country}
              </p>

              {country && !readOnly && (
                <Input
                  value={country}
                  onChange={e => {
                    handleEditValue("country", e.target.value);
                  }}
                />
              )}
            </div>
          </>
        )}
      </section>
    );
  },
);
