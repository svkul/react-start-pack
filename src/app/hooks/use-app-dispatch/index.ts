import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { AppDispatch, IStateSchema } from "@app/providers";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IStateSchema> = useSelector;
