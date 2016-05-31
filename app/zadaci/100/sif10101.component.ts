import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { FormBuilder, Control, ControlGroup, FORM_DIRECTIVES } from '@angular/common';
@Component({
    moduleId: module.id,
    selector: 'sif10101',
    templateUrl: 'sif10101.component.html'
    // directives: [Control, ControlGroup, FormBuilder, FORM_DIRECTIVES]
})
export class Sif10101Component implements OnInit {
    title: string = 'Šifarnik kontinenata';
    poruka: string = '10101';
    
    kontinenti: any[];
    //  = [
    //     {
    //         SIF_KONTINENTA: 'EU',
    //         NAZIV_KONTINENTA: 'Evropa'
    //     },
    //     {
    //         SIF_KONTINENTA: 'AM',
    //         NAZIV_KONTINENTA: 'Amerika'
    //     }
    // ];
    constructor(private _http: Http) {
        
    }

    ngOnInit() {
        let url = 'http://localhost:5000/api/kontinenti/'
        this._http.get(url)
            .map((res: Response) => res.json())
            .subscribe(
                kontinenti => this.kontinenti = kontinenti,
                error => console.log(error),
                () => console.log('Kontinenti ucitani')
            );
    }

}