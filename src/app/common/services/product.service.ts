import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
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
    ) { }

    public getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(`/products`)
            .pipe(
                catchError((_err) => of([]))
            );
    }

}
