import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { TestLoginService } from '../../shared/api/loginservice/test.login.service';
import { IRadnik } from '../../shared/modeli/radnik';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [TestLoginService]
})
export class LoginComponent {
    sifra: string = '';
    password: string = '';
    ispravanUnos: boolean;
    constructor(private _router: Router, private _loginService: TestLoginService) { }
    
    gotoDashboard() {
        
        // this._loginService.testPostLogin(radnik)
        //     .subscribe(
        //         result => {
        //             if (result) {
        //                 this._router.navigate(['Dashboard']);
        //             }
        //         }
        //     );
        
        if (this.sifra === this.password) {
            this.ispravanUnos = true;
            this._router.navigate(['Dashboard']);
        } else {
            this.ispravanUnos = false;
        }
    }
}