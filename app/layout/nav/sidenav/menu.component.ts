import { Component, OnInit, Input } from '@angular/core';
import { IMeni } from '../../../shared/modeli/meni.interface';
import { IZadatak } from '../../../shared/modeli/zadatak';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router } from '@angular/router-deprecated';
import { NgClass } from '@angular/common';
import { Sif10101Component } from '../../../zadaci/100/sif10101.component';

@Component({
    moduleId: module.id,
    selector: 'meni-view',
    templateUrl: 'menu.component.html',
    directives: [MenuComponent, NgClass, ROUTER_DIRECTIVES, Sif10101Component],
    styles:['.spusteno { display: block;}', '.dignuto {display: none;}']
})
@RouteConfig([
    
])
export class MenuComponent implements OnInit {
    selectedIdx: number = 0;
    selectedIdxDrugi: number = 0;
    selectedIdxTreci: number = 0;
    private selectedId: number;
    @Input() meni: IMeni[];
    
    constructor(routeParams: RouteParams, private _router: Router) {
        this.selectedId = +routeParams.get('id');
    }
    
    ngOnInit() { }
    
    /////////////
    
    isSelected(zadatak: IZadatak) {
        return  zadatak.ZAD_ID === this.selectedId;
    }
    onSelect(zadatak: IZadatak) {
        this._router.navigate(['Sifarnik', {id: zadatak.ZAD_ID}]);
    }
    selectItem(index: number): void {
        this.selectedIdx = index;
    }
    selectItemDrugi(index: number): void {
        this.selectedIdxDrugi = index;
    }
    
    selectItemTreci(index: number): void {
        this.selectedIdxTreci = index;
    }
    
    
}