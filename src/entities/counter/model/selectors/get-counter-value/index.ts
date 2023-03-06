import { createSelector } from "@reduxjs/toolkit";
import { ICounterSchema } from "../../";

import { getCounter } from "../get-counter";

export const getCounterValue = createSelector(
  getCounter,
  (counter: ICounterSchema) => counter.value,
);
