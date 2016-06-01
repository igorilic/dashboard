// angular
import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
// modeli
import { IZadatak } from '../modeli/zadatak';
import { IPolje } from '../modeli/polje';
// servisi
import { ZadaciService } from '../api/zadaci/zadaci.service';
// komponente
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
    moduleId: module.id,
    selector: 'sifarnik',
    templateUrl: 'sifarnik.component.html',
    directives: [BreadcrumbComponent, FORM_DIRECTIVES],
    providers: [ZadaciService]
})
export class SifarnikComponent implements OnInit {
    zadaci: IZadatak[];
    zadatak: IZadatak;
    polja: IPolje[];
    hleb: string[] = ['Portal', 'Šifarnici', 'Opšti šifarnici', 'Šifarnik opština'];
    title: string;
    
    test: string = 'test';
    constructor(private zadaciService: ZadaciService) {
        
    }

    ngOnInit() {
        
        this.zadaciService
            .getZadatak(10301)
            .subscribe(
                zadatak => this.polja = zadatak.Polja,
                error => console.log(error),
                // () => console.log(JSON.stringify(this.polja)),
                () => this.title = this.polja[0].NAZIV_ZAD
            );
    }
    
    onSubmit(form: any): void {
        console.log('Uneli ste sledece vrednosti: ', form);
    }

}