import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../../store/reducers/cart.reducer';

@Component({
    selector: 'course-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    @Input()
    public product: ICartProduct;

    @Output()
    public remove = new EventEmitter();

    @Output()
    public increment = new EventEmitter();

    @Output()
    public decrement = new EventEmitter();


    public removeProduct(product: ICartProduct): void {
        this.remove.emit(product);
    }

    public incrementProduct(product: ICartProduct): void {
        this.increment.emit(product);
    }

    public decrementProduct(product: ICartProduct): void {
        if (product.count === 1) {
            this.remove.emit(product);
            return;
        }
        this.decrement.emit(product);
    }

}
