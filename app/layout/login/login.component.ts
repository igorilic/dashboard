import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
    sifra: string = '';
    password: string = '';
    ispravanUnos: boolean;
    constructor(private _router: Router) { }
    
    gotoDashboard() {
        if (this.sifra === this.password) {
            this.ispravanUnos = true;
            this._router.navigate(['Dashboard']);
        } else {
            this.ispravanUnos = false;
        }
    }
}