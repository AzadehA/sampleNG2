
import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';

import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { RouteConfig } from 'angular2/router';

import { ProductListComponent } from '../products/product-list.component';
import { ProductService } from '../products/product.service';
import { CatalogService } from '../Catalog/catalog.service';
import { CatalogListComponent} from '../Catalog/catalog-list.component';

@Component({
    selector: 'pm-app',
    template: 
    '<header><nav><a [routerLink]="[\'CatalogsR\']" >Calalog list</a></nav></header><div><router-outlet></router-outlet> <h1>{{ pageTitle }}</h1><div> My first Component</div><div class=\'col-md-6\'><pm-products></pm-products></div>',
    directives: [ ProductListComponent,CatalogListComponent , ROUTER_DIRECTIVES],
    providers: [ProductService, HTTP_PROVIDERS, CatalogService , ROUTER_PROVIDERS]
})

    @RouteConfig([
        { path: '/catalogs', name: 'CatalogsR', component: CatalogListComponent },
        //{ path: '/products' , name: 'Products' , component: ProductListComponent , useAsDefault: true }
    ])
export class AppComponent {
    public    pageTitle: string = 'Acme Product Manager';
}
