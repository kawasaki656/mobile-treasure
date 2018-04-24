import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { cladApp } from './app.component';

import { GamesPage } from '../pages/games/games';
import { NewsPage } from '../pages/news/news';
import { AccountPage } from '../pages/account/account';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventPage } from "../pages/event/event";
import { StartPage } from "../pages/start/start";
import { RegistrationPage } from "../pages/registration/registration";
import { BrMaskerModule } from 'brmasker-ionic-3';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from "@angular/common/http";
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    cladApp,
    GamesPage,
    NewsPage,
    AccountPage,
    TabsPage,
    EventPage,
    StartPage,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(cladApp),
    BrMaskerModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    cladApp,
    GamesPage,
    NewsPage,
    AccountPage,
    TabsPage,
    EventPage,
    StartPage,
    RegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    DataProvider
  ]
})
export class AppModule {}
