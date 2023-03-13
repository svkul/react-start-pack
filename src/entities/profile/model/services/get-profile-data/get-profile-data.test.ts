import { TestAsyncThunk } from "@app/config/test-helpers";

import { getProfileData } from ".";

describe("get profile data", () => {
  test("should be fulfilled with valid data", async () => {
    const thunk = new TestAsyncThunk(getProfileData);

    const userData = { name: "Serhii", country: "Ukraine" };
    thunk.api.get.mockReturnValue(Promise.resolve({ data: userData }));

    const response = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe("fulfilled");
    expect(response.payload).toEqual(userData);
  });

  test("should be rejected, when status 403", async () => {
    const thunk = new TestAsyncThunk(getProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const response = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe("rejected");
    expect(response.payload).toEqual(undefined);
  });
});
