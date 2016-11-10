System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', '../products/product-list.component', '../products/product.service', '../Catalog/catalog.service', '../Catalog/catalog-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, router_2, product_list_component_1, product_service_1, catalog_service_1, catalog_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (catalog_service_1_1) {
                catalog_service_1 = catalog_service_1_1;
            },
            function (catalog_list_component_1_1) {
                catalog_list_component_1 = catalog_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Acme Product Manager';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        template: '<header><nav><a [routerLink]="[\'CatalogsR\']" >Calalog list</a></nav></header><div><router-outlet></router-outlet> <h1>{{ pageTitle }}</h1><div> My first Component</div><div class=\'col-md-6\'><pm-products></pm-products></div>',
                        directives: [product_list_component_1.ProductListComponent, catalog_list_component_1.CatalogListComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [product_service_1.ProductService, http_1.HTTP_PROVIDERS, catalog_service_1.CatalogService, router_1.ROUTER_PROVIDERS]
                    }),
                    router_2.RouteConfig([
                        { path: '/catalogs', name: 'CatalogsR', component: catalog_list_component_1.CatalogListComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map