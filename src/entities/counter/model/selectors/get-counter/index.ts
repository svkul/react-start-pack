import { IStateSchema } from "@app/providers";

export const getCounter = (state: IStateSchema) => state.counter;
