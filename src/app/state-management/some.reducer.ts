import { createReducer, on } from "@ngrx/store";
import { LoadAnnotationsSuccess } from "./some.actions";
import { IAnnotation } from "../models/iannotaiton";

export const SOME_FEATURE_NAME = 'some';

export interface SomeState {
  annotations: IAnnotation[]
}

const initialState: SomeState = {
  annotations: []
}
export const someReducer = createReducer(
  initialState,
  on(LoadAnnotationsSuccess, (state, action) => ({annotations: action.annotations})),
)
