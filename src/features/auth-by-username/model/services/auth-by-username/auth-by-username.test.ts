import { popupsActions, userActions } from "@entities";
import { TestAsyncThunk } from "@app/config/test-helpers";
import { authActions } from "@features";

import { authByUsername } from ".";

describe("get auth by username", () => {
  test("should be fulfilled with valid data", async () => {
    const thunk = new TestAsyncThunk(authByUsername);

    const userValue = { username: "admin", id: "1" };
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const response = await thunk.callThunk({
      username: "admin",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(5);
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue),
    );
    expect(thunk.dispatch).toHaveBeenCalledWith(
      popupsActions.setIsAuthPopupOpen(false),
    );
    expect(thunk.dispatch).toHaveBeenCalledWith(authActions.reset());
    expect(response.meta.requestStatus).toBe("fulfilled");
    expect(response.payload).toEqual(userValue);
  });

  test("should be rejected, when status 403", async () => {
    const thunk = new TestAsyncThunk(authByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const response = await thunk.callThunk({
      username: "admin",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe("rejected");
    expect(response.payload).toEqual("server-error");
  });
});
