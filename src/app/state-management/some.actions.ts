import { createAction, props } from '@ngrx/store';
import { IAnnotation } from "../models/iannotaiton";

export enum ActionTypes {
  DrawImageAndAnnotationsButtonClicked = '[Annotations] Draw image and annotations button clicked',
  LoadImageSuccess = '[Annotations] Load image success',
  LoadImageError = '[Annotations] Load image error',
  LoadAnnotationsSuccess = '[Annotations] Load annotations success',
  LoadAnnotationsError = '[Annotations] Load annotations error'
}

export const DrawImageAndAnnotationsButtonClicked = createAction(ActionTypes.DrawImageAndAnnotationsButtonClicked);
export const LoadImageSuccess = createAction(ActionTypes.LoadImageSuccess);
export const LoadImageError = createAction(
  ActionTypes.LoadImageError,
  props<{ err: string | Event }>()
);
export const LoadAnnotationsSuccess = createAction(
  ActionTypes.LoadAnnotationsSuccess,
  props<{ annotations: IAnnotation[] }>()
);
export const LoadAnnotationsError = createAction(
  ActionTypes.LoadAnnotationsError,
  props<{ err: string | Event }>()
);
