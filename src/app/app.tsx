import { FC, Suspense } from "react";

import { Sidebar, Header } from "@widgets";
import { Icons, Loader } from "@shared";
import { AppRouter } from "./router";
import { ErrorBoundary } from "./providers";

import st from "./app.module.css";

import "./i18n/index";

export const App: FC = () => {
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
          </ErrorBoundary>
        </main>
      </Suspense>
    </section>
  );
};
