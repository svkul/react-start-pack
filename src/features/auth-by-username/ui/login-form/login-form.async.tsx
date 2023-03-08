import { FC, lazy } from "react";
import { ILoginFormProps } from "./index";

export const LoginFormAsync = lazy<FC<ILoginFormProps>>(
  () => import("./index"),
);
