import { ICounterSchema } from "../types";
import { counterReducer, counterActions } from "./index";

describe("counter slice", () => {
  test("should increment value", () => {
    const state: ICounterSchema = { value: 5 };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 6,
    });
  });

  test("should decrement value", () => {
    const state: ICounterSchema = { value: 5 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 4,
    });
  });

  test("should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
