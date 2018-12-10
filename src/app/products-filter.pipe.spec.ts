import { IProduct } from './store/reducers/product.reducer';
import { ProductsFilterPipe } from './products-filter.pipe';

const products: IProduct [] = [
    {
        '_id': '12',
        'title': 'AAAA',
        'serial': 123,
        'author': 'PUMA',
        'price': 1500,
        'src': 'img/asda'
    },
    {
        '_id': '123',
        'title': 'BBB',
        'serial': 123,
        'author': 'REEBOK',
        'price': 1500,
        'src': 'img/asda'
    },
];

describe('ProductsFilterPipe', () => {
    let pipe: ProductsFilterPipe;
    beforeEach(() => {
        pipe = new ProductsFilterPipe();
    });
    it('should filter', () => {
        expect(pipe.transform(products, 'reebok').length)
            .toBe(1);
        expect(pipe.transform(products, 'reebok'))
            .toEqual([products[1]]);
    });
});
