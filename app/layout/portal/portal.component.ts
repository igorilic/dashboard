// angular
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router, RouteData } from '@angular/router-deprecated';
// servisi
import { TestLoginService } from '../../shared/api/loginservice/test.login.service';
import { RadniciService } from '../../shared/api/radnici/radnici.service';
// komponente
import { NaslovnaComponent } from './naslovna.component';
import { SidenavComponent } from '../nav/sidenav/sidenav.component';
import { TopnavComponent } from '../nav/topnav/topnav.component';
// modeli
import { IMeni } from '../../shared/modeli/meni.interface';
import { IRadnik } from '../../shared/modeli/radnik';
@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'portal.component.html',
    encapsulation: ViewEncapsulation.Emulated,
    directives: [ROUTER_DIRECTIVES, NaslovnaComponent, SidenavComponent, TopnavComponent],
    providers: [TestLoginService, RadniciService]
})
@RouteConfig([
    {path: '/', component: NaslovnaComponent, as: 'Naslovna', useAsDefault: true, data: {_meni: true} }
])
export class PortalComponent implements OnInit {
    meni: IMeni[];
    radnik: IRadnik;
    errorMsg: string;
    constructor(private _router: Router,
                private _testLogin: TestLoginService,
                private _radniciService: RadniciService,
                data: RouteData) {
                    this.meni = data.get('_meni')
                 }
    
    ngOnInit() {
        // this._radniciService.getRadnik(685)
        //                 .subscribe(
        //                     radnik => this.radnik = radnik,
        //                     error => this.errorMsg = error
        //                 );
        
        this._testLogin.testPostLogin({SIFRA_RADNIKA: '685', TAJNA_SIFRA: '685'})
            .subscribe(
                radnik => {
                    this.meni = radnik.VRSTA_ZADATAKA[0].DecaZadaci;
                    this.radnik = radnik;
                },
                // radnik => this.radnik = radnik,
                error => this.errorMsg = error
            );
        
    }

}