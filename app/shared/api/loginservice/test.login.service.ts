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
    constructor(private _http: Http) { }
    testPostLogin(radnik: IRadnik): Observable<IRadnik> {
        return this._http.get(this.url)
            .map((res: Response) => res.json())
            // .do((data: IRadnik) => console.log(JSON.stringify(data.VRSTA_ZADATAKA[0].DecaZadaci)))
            .catch(this.handleError); 
    }
    
    private handleError(error: any) {
        let errMsg = error.message || error.statusText || 'Server Error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}