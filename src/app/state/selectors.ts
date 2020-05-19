import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StateInterface } from "./reducer";

export const featureSelector = createFeatureSelector<StateInterface>(
  "helloWorldStore"
);

export const messageSelector = createSelector(
  featureSelector,
  (state: StateInterface) => state.message
);

export const selectors = {
  messageSelector
};
