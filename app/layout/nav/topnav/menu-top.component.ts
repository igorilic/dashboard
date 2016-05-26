import { Component, OnInit, Input } from '@angular/core';
import { IMeni } from '../../../shared/modeli/meni.interface';
@Component({
    moduleId: module.id,
    selector: 'menu-top',
    templateUrl: 'menu-top.component.html'
})
export class MenuTopComponent implements OnInit {
    
    @Input() meni: IMeni[]; 
    constructor() { }

    ngOnInit() { }

}