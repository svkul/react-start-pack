import { FC, Suspense } from "react";

import { Sidebar, Header } from "@widgets";
import { Icons, Icon, EIcons } from "@shared";
import { AppRouter } from "./router";
import { ErrorBoundary } from "./providers";

import st from "./app.module.css";

import "./i18n/index";

export const App: FC = () => {
  return (
    <section className={st.wrapper}>
      <Icons />

      <Suspense fallback="Lang Loading">
        <header className={st.header}>
          <Icon name={EIcons.VIE} width={24} height={16} />

          <Header />
        </header>

        <section className={st.sidebar}>
          <Sidebar />
        </section>

        <main className={st.main}>
          <ErrorBoundary>
            <AppRouter />
          </ErrorBoundary>
        </main>
      </Suspense>
    </section>
  );
};
