import { createAction, props } from "@ngrx/store";

export const helloWorld = createAction("[App] Hello World");
export const helloWorldEffect = createAction("[App] Hello World using Effects");
export const helloWorldEffectSuccess = createAction(
  "[App] Hello World using Effects Success",
  props<{ message: string }>()
);

export const actions = {
  helloWorld,
  helloWorldEffect,
  helloWorldEffectSuccess
};
