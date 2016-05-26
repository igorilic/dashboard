import { Component, OnInit, Input } from '@angular/core';
// import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { IMeni } from '../../../shared/modeli/meni.interface';
import { IRadnik } from '../../../shared/modeli/radnik';
import { TestLoginService } from '../../../shared/api/loginservice/test.login.service';

import { MenuComponent } from './menu.component';
@Component({
    moduleId: module.id,
    selector: 'sidenav',
    templateUrl: 'sidenav.component.html',
    directives: [ROUTER_DIRECTIVES, MenuComponent],
    providers: [TestLoginService],
    styles: [
        '.logo {border-bottom: 1px solid rgba(255,255,255,0.05); padding-left: 20px;}',
        '.sidebar-left-info { padding-top: 20px;}'
        ]
})
export class SidenavComponent implements OnInit {
    @Input() meni: IMeni[]
    
    // radnik: IRadnik;
    // errorMsg: string;
    constructor(private _router: Router,
                private _testLogin: TestLoginService) { }
    
    ngOnInit() { 
        // this._testLogin.testPostLogin({SIFRA_RADNIKA: '685', TAJNA_SIFRA: '685'})
        //     .subscribe(
        //         radnik => this.meni = radnik.VRSTA_ZADATAKA[0].DecaZadaci,
        //         error => this.errorMsg = error
        //     );
        
    }

}