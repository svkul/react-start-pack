import { IStateSchema } from "@app/providers";
import { DeepPartial } from "@reduxjs/toolkit";
import { getCounter } from ".";

describe("get counter", () => {
  test("should return counter object", () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 5 },
    };

    expect(getCounter(state as IStateSchema)).toEqual({ value: 5 });
  });
});
