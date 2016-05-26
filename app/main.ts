import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import { provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import 'rxjs/Rx';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
]);
