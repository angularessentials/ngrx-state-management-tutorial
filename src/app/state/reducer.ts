import { createReducer, on } from "@ngrx/store";
import { actions } from "./actions";

export interface StateInterface {
  message: string;
}

export const initialState: StateInterface = {
  message: "Hello World Default Message"
};

const _reducer = createReducer(
  initialState,
  on(actions.helloWorld, state => {
    return {
      ...state,
      message: "Hello World New Message"
    };
  }),
  on(actions.helloWorldEffectSuccess, (state, action) => {
    return {
      ...state,
      message: action.message
    };
  })
);

export function reducer(state, action) {
  return _reducer(state, action);
}
