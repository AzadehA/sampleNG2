import { Pipe, PipeTransform } from 'angular2/core';
import { ICatalog } from './Catalog';

@Pipe({
    name: 'catalogFuilter'
})
export class CatalogFilterPipe implements PipeTransform {

    transform(value: ICatalog[], args: string[]): ICatalog[] {

        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;

        return filter ? value.filter((catalog : ICatalog) => catalog.catalogName.toLocaleLowerCase().indexOf(filter) !== -1)  : value;
    }
}