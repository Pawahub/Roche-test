import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, of, switchMap } from "rxjs";
import { ActionTypes } from "./some.actions";
import * as AnnotationActions from "./some.actions";
import { SomeService } from "../services/some.service";

@Injectable({
  providedIn: 'root'
})
export class SomeEffects {
  loadAnnotations$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.LoadImageSuccess),
    switchMap(() => this.someService.loadAnnotations().pipe(
        switchMap(annotations => of(AnnotationActions.LoadAnnotationsSuccess({annotations}))),
        catchError(err => of(AnnotationActions.LoadAnnotationsError({err})))
      )
    )
  ))

  constructor(private actions$: Actions,
              private someService: SomeService) {
  }
}
