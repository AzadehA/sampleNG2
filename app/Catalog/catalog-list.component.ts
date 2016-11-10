import { Component , OnInit  } from 'angular2/core';

import { ICatalog } from '../Catalog/catalog';
import { CatalogService } from '../Catalog/catalog.service';
import { CatalogFilterPipe } from '../Catalog/catalog-filter.pipe';

@Component({
    selector: 'pm-catalogs',
    templateUrl: 'app/catalog/catalog-list.component.html',
    pipes: [CatalogFilterPipe]

})
export class CatalogListComponent {
    CatalogPageTitle: string = 'Catalog List';
    catalogs: ICatalog[];
    filterBy: string;
    catalogFilter: string = 'home';
    errorMessage : string;

    constructor(private catalogService: CatalogService) {

    }

    ngOnInit(): void {

        this.catalogService.getCatalogs()
            .subscribe(
            catalogs => this.catalogs = catalogs,
            error => this.errorMessage = <any>error);

        console.log(this.catalogs);
    }
}