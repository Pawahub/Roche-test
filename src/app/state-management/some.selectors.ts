import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SOME_FEATURE_NAME, SomeState } from "./some.reducer";

const getFeature = createFeatureSelector<SomeState>(SOME_FEATURE_NAME)
export const selectAnnotations = createSelector(
  getFeature,
  state => state.annotations
);
