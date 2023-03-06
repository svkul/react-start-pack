import { FC, memo } from "react";

import st from "./loader.module.css";

export const Loader: FC = memo(() => {
  return (
    <div className={st.loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});
