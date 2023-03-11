import { TestAsyncThunk } from "@app/config/test-helpers";

import { updateProfileData } from ".";

const userData = { name: "Vlad", country: "Germany" };

describe("update profile data", () => {
  test("should be fulfilled with valid data", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        data: userData,
        form: userData,
        isLoading: false,
        readonly: true,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data: userData }));

    const response = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe("fulfilled");
    expect(response.payload).toEqual(userData);
  });

  test("should be rejected, when status 403", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        data: userData,
        form: userData,
        isLoading: false,
        readonly: true,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const response = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe("rejected");
    expect(response.payload).toEqual("server-error");
  });
});
