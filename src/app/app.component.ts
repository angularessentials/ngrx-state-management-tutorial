import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { StoreFacade } from "./state/store.facade";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  readonly message$: Observable<string>;

  constructor(private storefacade: StoreFacade) {
    this.message$ = this.storefacade.message$;
  }

  ngOnInit() {
    this.storefacade.dispatchHelloWorld();
    this.storefacade.dispatchHelloWorldEffects();
  }
}
