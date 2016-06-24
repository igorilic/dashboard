// angular
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router, RouteParams} from '@angular/router-deprecated';
import { AsyncPipe } from '@angular/common';
// servisi
import { LoginService } from '../../../shared/api/loginservice/login.service';
import { RadniciService } from '../../../shared/api/radnici/radnici.service';
import { Observable } from 'rxjs/Observable';
// komponente
import { NaslovnaComponent } from './naslovna.component';
import { SidenavComponent } from '../nav/sidenav/sidenav.component';
import { TopnavComponent } from '../nav/topnav/topnav.component';
import { SifarnikComponent } from '../../sifarnici/sifarnik.component';
import { GrupeComponent } from '../grupe/grupe.component';
import { ToggleMenuComponent } from '../nav/topnav/toggle.component';
// modeli
import { IMeni } from '../../../shared/modeli/meni.interface';
import { IRadnik } from '../../../shared/modeli/radnik';
// store
import { Store } from '@ngrx/store';
@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'portal.component.html',
    encapsulation: ViewEncapsulation.Emulated,
    directives: [ROUTER_DIRECTIVES,
                 NaslovnaComponent, 
                 SidenavComponent, 
                 TopnavComponent, 
                 SifarnikComponent, 
                 GrupeComponent,
                 ToggleMenuComponent],
    providers: [LoginService, RadniciService],
    pipes: [AsyncPipe]
})
@RouteConfig([
    {path: '/', component: NaslovnaComponent, name: 'Naslovna', useAsDefault: true},
    {path: '/sifarnik/:id', component: SifarnikComponent, name: 'Sifarnik'},
    {path: '/grupe/:id', component: GrupeComponent, name: 'Grupe'}
    
])
export class PortalComponent{
    meni: IMeni[];
    radnik: IRadnik;
    errorMsg: string;
    radId: string;
    public menu;
    constructor(private _router: Router,
                private _testLogin: LoginService,
                private _radniciService: RadniciService,
                private _routeParams: RouteParams,
                private _store: Store<any>)
                 {
                     this._store.select('menu')
                         .subscribe(menu => this.menu = menu);
                     this.radId = localStorage.getItem('id');
                    
                    
                     this._testLogin.postLogin({SIFRA_RADNIKA: this.radId, TAJNA_SIFRA: this.radId})
                            .subscribe(
                                (radnik:IRadnik) => {
                                    this.radnik = radnik;
                                    console.log(`Ulogovan je ${radnik.IME_RADNIKA} ${radnik.PREZIME_RADNIKA}`);
                                     if (this.radnik.VRSTA_ZADATAKA == []) {
                                        alert(`Radnik ${this.radnik.IME_RADNIKA} ${this.radnik.PREZIME_RADNIKA} nema ovlašćenja. Kontaktirajte administratora kako bi radnik dobio svoja ovlašćenja.`);
                                        
                                    } else {
                                        this.meni = this.radnik.VRSTA_ZADATAKA[0].DecaZadaci;
                                    }
                                },
                                error => this.errorMsg = error,
                                () => {
                                    if (this.radnik.VRSTA_ZADATAKA == []) {
                                        alert(`Radnik ${this.radnik.IME_RADNIKA} ${this.radnik.PREZIME_RADNIKA} nema ovlašćenja. Kontaktirajte administratora kako bi radnik dobio svoja ovlašćenja.`);
                                        
                                    } else {
                                        this.meni = this.radnik.VRSTA_ZADATAKA[0].DecaZadaci;
                                    }
                                    
                                }
                                
                            );
                 }
    
    toggleMenu() {
        this._store.dispatch({type: 'TOGGLE_MENU'})
    }
    
}