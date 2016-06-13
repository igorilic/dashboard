import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import { provide, enableProdMode } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { FORM_PROVIDERS } from '@angular/common';
import 'rxjs/Rx';
import * as $ from 'jquery';
import 'ms-signalr-client';
import { SignalRClient } from './shared/signalr/signalr-client.service';
import { SmartCardAuth } from './shared/signalr/smartcard.service';
import { ToggleMenuService } from './layout/nav/topnav/toggle.service';

enableProdMode();

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    FORM_PROVIDERS,
    SignalRClient,
    SmartCardAuth,
    ToggleMenuService
]);
