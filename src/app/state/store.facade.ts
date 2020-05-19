import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { selectors } from "./selectors";
import { Observable } from "rxjs";
import { actions } from "./actions";

@Injectable({
  providedIn: "root"
})
export class StoreFacade {
  public readonly message$: Observable<string> = this.store.pipe(
    select(selectors.messageSelector)
  );

  constructor(private store: Store) {}

  dispatchHelloWorld() {
    this.store.dispatch(actions.helloWorld());
  }

  dispatchHelloWorldEffects() {
    this.store.dispatch(actions.helloWorldEffect());
  }
}
