import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../store';
import { ICartProduct, totalPrice, trueProductsCount } from '../../store/reducers/cart.reducer';
import { Observable } from 'rxjs';
import { DecrementProductInCart, IncrementProductInCart, RemoveProductFromCart } from '../../store/actions/cart.action';
import {selectAll} from '../../store/reducers/cart.reducer';
@Component({
    selector: 'course-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    public products$: Observable<ICartProduct[]>;
    public productsCount$: Observable<number>;
    public totalPrice$: Observable<number>;

    constructor(
        private _store: Store<IStore>
    ) { }

    public ngOnInit() {
        this.products$ = this._store.select(selectAll);
        this.productsCount$ = this._store.select(trueProductsCount);
        this.totalPrice$ = this._store.select(totalPrice);
    }

    public removeProduct(product: ICartProduct): void {
        this._store.dispatch(new RemoveProductFromCart(product));
    }

    public incrementProduct(product: ICartProduct): void {
        this._store.dispatch(new IncrementProductInCart(product));
    }

    public decrementProduct(product: ICartProduct): void {
        this._store.dispatch(new DecrementProductInCart(product));
    }

}
