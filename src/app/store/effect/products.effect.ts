import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Inject, Injectable } from '@angular/core';
import { GET_PRODUCTS_PENDING, GetProductsError, GetProductsSuccess } from '../actions/products.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../common/services/product.service';

@Injectable()
export class ProductsEffects {
    @Effect()
    products$: Observable<Action> = this._actions$.pipe(
        ofType(GET_PRODUCTS_PENDING),
        switchMap(() => {
            return this._http.get<IProduct[]>(`/products`)
                .pipe(
                    map((products: IProduct[]) => new GetProductsSuccess(products)),
                    catchError((_err) => of(new GetProductsError()))
                );
        })
    );

    public constructor(
        private _actions$: Actions,
        @Inject(HttpClient) private _http: HttpClient,
    ) {}
}
