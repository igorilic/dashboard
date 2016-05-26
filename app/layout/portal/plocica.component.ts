import { Component, OnInit, Input } from '@angular/core';
import { IMeni } from '../../shared/modeli/meni.interface';
@Component({
    moduleId: module.id,
    selector: 'plocica',
    templateUrl: 'plocica.component.html',
    styles: ['.elipsis { white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}']
})
export class PlocicaComponent implements OnInit {
    @Input() meni: IMeni[];
    constructor() { }

    ngOnInit() { }

}