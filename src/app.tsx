import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Sidebar, Header } from "./components";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Error } from "./pages/error";

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
