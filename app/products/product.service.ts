import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private productUrl = 'api/products/products.json';

    constructor(private http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return  this.http.get(this.productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
       
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}