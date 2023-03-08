import { IStateSchema } from "@app/providers";
import { DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from ".";

describe("get counter value", () => {
  test("should return counter value", () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 5 },
    };

    expect(getCounterValue(state as IStateSchema)).toEqual(5);
  });
});
