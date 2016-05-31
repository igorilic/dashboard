import { Injectable } from '@angular/core';
import { Http,
         Response
         } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IRadnik } from '../../modeli/radnik';
import { IMeni } from '../../modeli/meni.interface';
import { SessionStorageService } from '../storage/session-storage.service';
@Injectable()
export class TestLoginService {
    url: string = 'app/assets/api/api.radnik.json';
    private loggedIn: boolean = false;
    
    constructor(private _http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    testPostLogin(radnik: IRadnik): Observable<IRadnik> {
        return this._http.get(this.url)
            .map((res: Response) => res.json())
            // .map(res => {
            //     if (res.success) {
            //         localStorage.setItem('auth_token', res.auth_token);
            //         this.loggedIn = true;
            //     }
                
            //     return res.success;
            // })
            // .do((data: IRadnik) => console.log(JSON.stringify(data.VRSTA_ZADATAKA[0].DecaZadaci)))
            .catch(this.handleError); 
    }
    
    logout(): void {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }
    
    isLoggedIn(): boolean {
        return this.loggedIn;
    }
    
    private handleError(error: any) {
        let errMsg = error.message || error.statusText || 'Server Error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}