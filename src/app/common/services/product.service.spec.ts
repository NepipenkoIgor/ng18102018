import { inject, TestBed } from '@angular/core/testing';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BASE_URL, BASE_URL_TOKEN } from '../../config';
import { environment } from '../../../environments/environment';
import { IProduct, ProductService } from './product.service';
import { InterceptorService } from './interceptor.service';


const testProducts: IProduct[] = [
    {
        '_id': '1',
        'title': 'Test Product',
        'serial': 12,
        'author': 'Puma',
        'price': 1234,
        'src': 'img.png',
    },
    {
        '_id': '1',
        'title': 'Test Product',
        'serial': 12,
        'author': 'Puma',
        'price': 1234,
        'src': 'img.png',
    },
];

describe('ProductsService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            HttpClientTestingModule
        ],
        providers: [
            ProductService,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: InterceptorService,
                multi: true
            },
            {
                provide: BASE_URL_TOKEN,
                useValue: BASE_URL,
                multi: true
            },
        ]
    }));

    it('test service', inject([ProductService, HttpTestingController], (
        _productsService: ProductService, _backend: HttpTestingController
    ) => {
        _productsService.getProducts()
            .subscribe((data: IProduct[]) => {
                expect(Array.isArray(data))
                    .toBeTruthy();
                expect(data.length)
                    .toEqual(2);
            });

        _backend.expectOne({
            method: 'GET',
            url: `${environment.baseUrl}/products`
        })
            .flush({ data: testProducts });

    }));

});
