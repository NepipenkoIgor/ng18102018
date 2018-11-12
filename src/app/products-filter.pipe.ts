import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './data';

@Pipe({
    name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

    public transform(products: IProduct[], searchText: string): IProduct[] {
        if (!searchText) {
            return products;
        }
        return products.filter((product: IProduct) => {
            return product.author.toLowerCase()
                .includes(searchText.toLowerCase());
        });
    }

}
