import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {ItemDetailsPage} from '../pages/item-details/item-details';
import {ListPage} from '../pages/list/list';
import {SettingsPage} from '../pages/settings/settings';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {AppConfig} from "../config/app-config";
import {UserService} from "../services/user.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {UserGroupsService} from "../services/user-groups.service";
import {UserGroupsPage} from "../pages/user-groups/user-groups";
import {CreateGroupPage} from "../pages/user-groups/create-group";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SettingsPage,
    UserGroupsPage,
    CreateGroupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SettingsPage,
    UserGroupsPage,
    CreateGroupPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppConfig,
    UserService,
    UserGroupsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
