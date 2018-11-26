import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

export interface IProduct {
    '_id': string;
    'title': string;
    'serial': number;
    'author': string;
    'price': number;
    'src': string;
}

export class ProductService {

    public constructor(
        @Inject(HttpClient) private _http: HttpClient,
    ) { }

    public getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(`/products`)
            .pipe(
                catchError((_err) => of([]))
            );
    }

    public getProduct(id: string): Observable<IProduct> {
        return this._http.get<IProduct>(`/products/${id}`);
    }

}
