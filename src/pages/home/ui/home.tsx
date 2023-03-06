import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Modal, Button } from "@shared";

export default () => {
  const { t } = useTranslation("home");
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <div>
      <p>{t("home-page")}</p>
      <Modal
        controll={
          <Button onClick={() => setIsModalOpened(true)}>Open modal</Button>
        }
        isOpen={isModalOpened}
        onClose={() => {
          setIsModalOpened(false);
        }}
      >
        <div style={{ padding: 16 }}>
          <p>lol</p>
        </div>
      </Modal>
    </div>
  );
};
