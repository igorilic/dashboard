// angular
import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
// servisi
// komponente
import { PortalComponent } from './layout/portal/portal.component';
import { LoginComponent } from './layout/login/login.component';
// modeli
@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    styleUrls:['app.component.css']
})
@RouteConfig([
    {path: '/', component: LoginComponent, as: 'Login'},
    {path: '/dashboard/...', component: PortalComponent, name: 'Dashboard'}
])
export class AppComponent { }
