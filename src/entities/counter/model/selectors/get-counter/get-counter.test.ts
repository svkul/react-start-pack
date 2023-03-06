import { IStateScheme } from "@app/providers";
import { DeepPartial } from "@reduxjs/toolkit";
import { getCounter } from ".";

describe("get counter", () => {
  test("should return counter object", () => {
    const state: DeepPartial<IStateScheme> = {
      counter: { value: 5 },
    };

    expect(getCounter(state as IStateScheme)).toEqual({ value: 5 });
  });
});
