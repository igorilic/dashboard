import { Component, OnInit, Input } from '@angular/core';
import { IMeni } from '../../../shared/modeli/meni.interface';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { NgClass } from '@angular/common';
@Component({
    moduleId: module.id,
    selector: 'meni-view',
    templateUrl: 'menu.component.html',
    directives: [MenuComponent, NgClass, ROUTER_DIRECTIVES],
    styles:['.spusteno { display: block;}', '.dignuto {display: none;}']
})
export class MenuComponent implements OnInit {
    isSelected: boolean = false;
    index: number;
    @Input() meni: IMeni[];
    constructor() { }
    onSelect(): void {
        
        this.isSelected = !this.isSelected;
    }
    
    track(index: number, obj: any): any {
        this.index = index;
        return index;
    }
    ngOnInit() { }

}