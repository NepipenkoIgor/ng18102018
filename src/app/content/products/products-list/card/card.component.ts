import { Component, Input } from '@angular/core';
import { IProduct } from '../../../../common/services/product.service';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../store';
import { AddProductToCart } from '../../../../store/actions/cart.action';

@Component({
    selector: 'course-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input()
    public product: IProduct;


    constructor(
        private _store: Store<IStore>
    ) {}

    public dollarPrice(price: number): number {
        return price / 54;
    }

    public addToCart(product: IProduct): void {
        this._store.dispatch(new AddProductToCart(product));
    }
}
