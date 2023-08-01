import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';

import { SomeService } from "./services/some.service";
import { SomeEffects } from "./state-management/some.effects";
import { SOME_FEATURE_NAME, someReducer } from "./state-management/some.reducer";

import { AppComponent } from './app.component';
import { SomeComponent } from './components/some/some.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      [SOME_FEATURE_NAME]: someReducer
    }, {}),
    EffectsModule.forRoot([SomeEffects])
  ],
  providers: [SomeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
