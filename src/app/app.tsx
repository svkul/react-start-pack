import { FC, Suspense, useState } from "react";

import { Sidebar, Header } from "@widgets";
import { Icons, Loader, Modal, Button } from "@shared";
import { AppRouter } from "./router";
import { ErrorBoundary } from "./providers";

import st from "./app.module.css";

import "./i18n/index";

export const App: FC = () => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <section className={st.wrapper}>
      <Icons />

      <Suspense fallback={<Loader />}>
        <header className={st.header}>
          <Header />
        </header>

        <section className={st.sidebar}>
          <Sidebar />
        </section>

        <main className={st.main}>
          <ErrorBoundary>
            <AppRouter />

            <Modal
              controll={
                <Button onClick={() => setIsModalOpened(true)}>
                  Open modal
                </Button>
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
          </ErrorBoundary>
        </main>
      </Suspense>
    </section>
  );
};
