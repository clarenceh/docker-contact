import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { MdIconRegistry } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CustomMaterialModule } from './material.module';
import 'hammerjs';

/* Angular Material module */
import {
  FullscreenOverlayContainer,
  OverlayContainer
} from '@angular/material';

import { ContactService } from './services/contact.service';
import { reducer } from './reducers/contact';
import { ContactEffects } from './effects/contact';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(ContactEffects)
  ],
  providers: [
    MdIconRegistry,
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
