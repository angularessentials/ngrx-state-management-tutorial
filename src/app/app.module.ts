import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "./app.component";

import { reducer } from "./state/reducer";
import { Effects } from "./state/effects";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ helloWorldStore: reducer }),
    EffectsModule.forRoot([Effects])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
