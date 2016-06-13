import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { TestLoginService } from '../../shared/api/loginservice/test.login.service';
import { IRadnik } from '../../shared/modeli/radnik';
// servisi
import { SmartCardAuth } from '../../shared/signalr/smartcard.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [TestLoginService, SmartCardAuth]
})
export class LoginComponent implements OnInit {
    sifra: string = '';
    password: string = '';
    ispravanUnos: boolean;

    cardAuthenticate: boolean = false;
	cardError: boolean = true;

    pinCodeIn: string = '';
    pinCode: string = '';
    cardNumber: string = '';
    userName: string = '';
    badPin = false;
    
    constructor(private _router: Router, 
                private _loginService: TestLoginService,
                private _smartCardAuth: SmartCardAuth) { }
    
    gotoDashboard() {
        
        if (this.sifra === this.password) {
            this.ispravanUnos = true;
            this._router.navigate(['Dashboard']);
        } else {
            this.ispravanUnos = false;
        }
    }

    ngOnInit() {
        // this.cardError = this._smartCardAuth.cardError;
        
        // if (this.cardError === true) {
        //     console.log('Postoji problem sa citacem kartice');
        // }

        // this._smartCardAuth.SelectCard()
        //     .then((data: any) => {
        //         console.log('Uspesna realizacija SelectCarda');
        //         if (data === false) {
        //             this._smartCardAuth.cardInserted = false;
        //             this._smartCardAuth.cardRemoved = true;
        //             this._smartCardAuth.cardError = false;
        //             return;
        //         }

        //         this._smartCardAuth.cardInserted = true;
        //         this._smartCardAuth.cardRemoved = false;
        //         this._smartCardAuth.cardError = true;

        //         this.cardAuthenticate = true;

        //         this._smartCardAuth.GetCardData()
        //             .done((cardData: any) => {
        //                 if (cardData !== null) {
        //                     this.pinCode = cardData.PIN;
        //                     this.cardNumber = cardData.CardNumber;
        //                     this.userName = cardData.Name;
        //                     console.log('Card No.:' + this.cardNumber);
        //                     console.log('PIN: ' + this.pinCode);
        //                     console.log('Name: ' + this.userName);
                            
        //                 } else {
        //                     this.cardAuthenticate = false;
        //                     console.log('Neuspesno citanje podataka sa kartice');
        //                     return;
        //                 }
        //             })
        //             .fail((err: any) => {
        //                 this.cardAuthenticate = false;
        //                 console.log('Neuspesno ucitavanje podataka sa kartice');
        //                 return;
        //             })
        //     })
        //     .fail((err: any) => {
        //         this.cardError = true;
        //         console.log('Neuspesno uvodjenje selectCarda. Greska: ' + err);
                
        //     });
    }
}