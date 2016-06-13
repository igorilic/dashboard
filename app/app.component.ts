// angular
import {Component, HostBinding, OnInit} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

// servisi
import { SmartCardAuth } from './shared/signalr/smartcard.service';
import { ToggleMenuService } from './layout/nav/topnav/toggle.service';
import { Subscription } from 'rxjs/Subscription';
// komponente
import { PortalComponent } from './layout/portal/portal.component';
import { LoginComponent } from './layout/login/login.component';
// modeli
@Component({
    moduleId: module.id,
    selector: 'body',
    templateUrl: 'app.component.html',
    // template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    styleUrls:['app.component.css'],
    providers: [SmartCardAuth, ToggleMenuService]
})
@RouteConfig([
    {path: '/login', component: LoginComponent, name: 'Login', useAsDefault: true},
    // {path:'/...', component: AppComponent, name: 'App', useAsDefault: true},
    {path: '/dashboard/...', component: PortalComponent, name: 'Dashboard'}
])
export class AppComponent implements OnInit {
    subscription: Subscription;
    @HostBinding('class.sidebar-collapsed') toggMeni: boolean = false;
    constructor(private smartCardAuth: SmartCardAuth,
                private _toggleMenuService: ToggleMenuService) {
             this.subscription = _toggleMenuService
                .toggleAnnounced$
                .subscribe(
                    toggle => this.toggMeni = toggle,
                    () => console.log(this.toggMeni)
                );  
        
    }
    ngOnInit() {
        this.smartCardAuth.start();
        
    }

    
    
}
