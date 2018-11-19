import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { BASE_URL_TOKEN } from '../../config';

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
        @Inject(BASE_URL_TOKEN) private _baseUrl: string,
    ) { }

    public getProducts(): Observable<IProduct[]> {
        console.log(this._baseUrl);
        return this._http.get(`${this._baseUrl}/products`)
            .pipe(
                map((res: { data: IProduct[] }) => res.data),
                catchError((_err) => of([]))
            );
    }

}
