import { Component, OnInit, Output } from '@angular/core';
import { ToggleMenuService } from './toggle.service';
@Component({
    moduleId: module.id,
    selector: 'toggle-menu',
    templateUrl: 'toggle.component.html',
    providers: [ToggleMenuService]
})
export class ToggleMenuComponent implements OnInit {
    // @Output() kliknuto: boolean = false;
    kliknuto: boolean = false;
    constructor(private _toggleMenuService: ToggleMenuService) { }

    ngOnInit() { }
    
    toggleMenu(): void {
        this.kliknuto = !this.kliknuto;
        this._toggleMenuService.announceToggle(this.kliknuto);
        console.log(this.kliknuto);
    }

}