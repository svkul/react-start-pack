import { FC } from "react";
import classnames from "classnames";

import st from "./index.module.css";

interface IDetailsProps {
  className?: string;
}

export const Details: FC<IDetailsProps> = ({ className }) => {
  return <section className={classnames(st.wrapper, className)}></section>;
};
