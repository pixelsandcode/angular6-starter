import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './app.state';
import { ServicesModule } from './shared/services/services.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpErrorHandler } from './core/http-error-handler.service';
import { MessageService } from './core/message.service';
import { HttpInterceptorProviders} from './core/http-interceptors';
import { AppGuards } from './core/guards';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { velocity: 0.4, threshold: 20 }
  };
}
// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState,
  Title,
  // ContactsService,
  { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
  // {provide: LocationStrategy, useClass: HashLocationStrategy}
];

export interface StoreType {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token'),
        whitelistedDomains: ['http://api.chooze.ir'],
        // blacklistedRoutes: ['localhost:3001/auth/']
      }
    }),
    ServicesModule,
    SharedModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    APP_PROVIDERS,
    HttpErrorHandler,
    MessageService,
    HttpInterceptorProviders,
    AppGuards,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appState: AppState) {}
}
