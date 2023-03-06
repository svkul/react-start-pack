import { IStateScheme } from "@app/providers";
import { DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from ".";

describe("get counter value", () => {
  test("should return counter value", () => {
    const state: DeepPartial<IStateScheme> = {
      counter: { value: 5 },
    };

    expect(getCounterValue(state as IStateScheme)).toEqual(5);
  });
});
