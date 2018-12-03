import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../../../store/reducers/product.reducer';
import { ProductService } from '../../../common/services/product.service';

@Injectable()
export class OneProductResolveService implements Resolve<IProduct> {

    public constructor(
        private _productService: ProductService,
        private _router: Router,
    ) { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
        return this._productService.getProduct(route.params.id)
            .pipe(
                catchError((_err) => {
                    this._router.navigate(['/products']);
                    return of(null);
                })
            );
    }
}
