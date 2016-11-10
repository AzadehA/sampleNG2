import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

import { ICatalog } from './Catalog';
import { Observable } from 'rxjs/Observable';


@Injectable()


export class CatalogService {
    private catalogUrl ='api/catalog/catalog.json';

    constructor(private http: Http) {}

    getCatalogs(): Observable<[ICatalog]> {
        return this.http.get(this.catalogUrl)
            .map((response: Response) => <ICatalog[]>response.json())
            .do(data => console.log("All Catalog... " + JSON.stringify(data)))
            .catch(this.handleError);


        //return [
        //    {
        //        "catalogId": 1,
        //        "catalogName": "Home",
        //        "description": "Home appliance"
        //    },
        //    {
        //        "catalogId": 2,
        //        "catalogName": "garden",
        //        "description": "Garden tools"

        //    },
        //    {
        //        "catalogId": 3,
        //        "catalogName": " Kitchen",
        //        "description": "Kitchen appliance"
        //    }
        //];

    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
