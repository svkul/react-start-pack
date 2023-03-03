import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Sidebar, Header } from "@entities";
import { Home, About, Error } from "@pages";

import st from "./app.module.css";

export const App: FC = () => {
  return (
    <section className={st.wrapper}>
      <header className={st.header}>
        <Header />
      </header>

      <section className={st.sidebar}>
        <Sidebar />
      </section>

      <main className={st.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </main>
    </section>
  );
};
