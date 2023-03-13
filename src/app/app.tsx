import { FC, Suspense, useEffect } from "react";

import { NavList, Header } from "@widgets";
import { Icons, Loader } from "@shared";
import { getUserIsMounted, userActions } from "@entities";
import { useAppDispatch, useAppSelector } from "./hooks";

import { AppRouter } from "./router";
import { ErrorBoundary } from "./providers";

import st from "./app.module.css";

import "./i18n/index";

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const isMounted = useAppSelector(getUserIsMounted);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <section className={st.wrapper}>
      <Icons />

      <Suspense fallback={<Loader />}>
        <header className={st.header}>
          <Header />
        </header>

        <section className={st.sidebar}>
          <NavList />
        </section>

        <main className={st.main}>
          <ErrorBoundary>{isMounted && <AppRouter />}</ErrorBoundary>
        </main>
      </Suspense>
    </section>
  );
};
