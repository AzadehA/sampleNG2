System.register(['angular2/core', '../Catalog/catalog.service', '../Catalog/catalog-filter.pipe'], function(exports_1, context_1) {
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
    var core_1, catalog_service_1, catalog_filter_pipe_1;
    var CatalogListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (catalog_service_1_1) {
                catalog_service_1 = catalog_service_1_1;
            },
            function (catalog_filter_pipe_1_1) {
                catalog_filter_pipe_1 = catalog_filter_pipe_1_1;
            }],
        execute: function() {
            CatalogListComponent = (function () {
                function CatalogListComponent(catalogService) {
                    this.catalogService = catalogService;
                    this.CatalogPageTitle = 'Catalog List';
                    this.catalogFilter = 'home';
                }
                CatalogListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.catalogService.getCatalogs()
                        .subscribe(function (catalogs) { return _this.catalogs = catalogs; }, function (error) { return _this.errorMessage = error; });
                    console.log(this.catalogs);
                };
                CatalogListComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-catalogs',
                        templateUrl: 'app/catalog/catalog-list.component.html',
                        pipes: [catalog_filter_pipe_1.CatalogFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [catalog_service_1.CatalogService])
                ], CatalogListComponent);
                return CatalogListComponent;
            }());
            exports_1("CatalogListComponent", CatalogListComponent);
        }
    }
});
//# sourceMappingURL=catalog-list.component.js.map