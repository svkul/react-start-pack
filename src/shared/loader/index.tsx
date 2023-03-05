import { FC } from "react";

import st from "./loader.module.css";

export const Loader: FC = () => {
  return (
    <div className={st.loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
