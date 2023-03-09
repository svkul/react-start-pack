import axios from "axios";

import { popupsActions, userActions } from "@entities";
import { TestAsyncThunk } from "@app/config/test-helpers";
import { authActions } from "@features";

import { authByUsername } from ".";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, { shallow: true });

describe("get auth by username", () => {
  test("should be fulfilled with valid data", async () => {
    const userValue = { username: "admin", id: "1" };
    (mockedAxios.post as jest.Mock).mockReturnValue(
      Promise.resolve({ data: userValue }),
    );

    const thunk = new TestAsyncThunk(authByUsername);
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
    (mockedAxios.post as jest.Mock).mockReturnValue(
      Promise.resolve({ status: 403 }),
    );

    const thunk = new TestAsyncThunk(authByUsername);
    const response = await thunk.callThunk({
      username: "admin",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe("rejected");
    expect(response.payload).toEqual("global-error");
  });
});
