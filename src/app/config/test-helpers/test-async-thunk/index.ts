import { IStateSchema } from "@app/providers";
import { AsyncThunkAction } from "@reduxjs/toolkit";

type ActionCreatorType<Return, Arg, AsyncThunkConfig> = (
  arg: Arg,
  // @ts-ignore
) => AsyncThunkAction<Return, Arg, AsyncThunkConfig>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => IStateSchema;
  actionCreator: ActionCreatorType<
    Return,
    Arg,
    { rejectedValue: RejectedValue }
  >;

  constructor(
    actionCreator: ActionCreatorType<
      Return,
      Arg,
      { rejectedValue: RejectedValue }
    >,
  ) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.actionCreator = actionCreator;
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
