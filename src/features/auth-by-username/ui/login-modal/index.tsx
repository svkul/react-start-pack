import { FC, Suspense } from "react";
import { useTranslation } from "react-i18next";

import { Button, EButtonTheme, Loader, Modal } from "@shared";

import { LoginFormAsync } from "../login-form/login-form.async";

interface ILoginModalProps {
  className?: string;
  withPortal?: boolean;
  isOpened: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const LoginModal: FC<ILoginModalProps> = ({
  className,
  withPortal = true,
  isOpened,
  onOpen,
  onClose,
}) => {
  const { t } = useTranslation("auth-form");

  return (
    <Modal
      withPortal={withPortal}
      title={t("auth-form-login") || ""}
      controll={
        <Button theme={EButtonTheme.SECONDARY} onClick={onOpen}>
          {t("auth-form-login")}
        </Button>
      }
      className={className}
      isOpen={isOpened}
      onClose={onClose}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
