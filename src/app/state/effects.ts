import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, debounceTime } from "rxjs/operators";
import { of } from "rxjs";

import { actions } from "./actions";

@Injectable({
  providedIn: "root"
})
export class Effects {
  helloWorldEffects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.helloWorldEffect),
      debounceTime(2000),
      switchMap(action => {
        return of("Hello World New Message From Effects");
      }),
      map(message => actions.helloWorldEffectSuccess({ message }))
    );
  });

  constructor(private actions$: Actions) {}
}
