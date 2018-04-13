import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { cladApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {EventPage} from "../pages/event/event";
import {StartPage} from "../pages/start/start";

@NgModule({
  declarations: [
    cladApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventPage,
    StartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(cladApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    cladApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventPage,
    StartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
