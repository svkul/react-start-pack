import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "@app";
import { defaultTheme } from "./features";

import "./app/styles/index.css";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  const body = document.querySelector("body");

  if (body) {
    body.dataset.theme = defaultTheme;
  }

  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
