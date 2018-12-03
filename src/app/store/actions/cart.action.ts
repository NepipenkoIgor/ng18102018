import { IProduct } from '../reducers/product.reducer';
import { ICartProduct } from '../reducers/cart.reducer';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const INCREMENT_PRODUCT_IN_CART = 'INCREMENT_PRODUCT_IN_CART';
export const DECREMENT_PRODUCT_IN_CART = 'DECREMENT_PRODUCT_IN_CART';


export class AddProductToCart {
    public readonly type = ADD_PRODUCT_TO_CART;

    public constructor(public readonly payload: IProduct) {}
}

export class RemoveProductFromCart {
    public readonly type = REMOVE_PRODUCT_FROM_CART;

    public constructor(public readonly payload: ICartProduct) {}
}

export class IncrementProductInCart {
    public readonly type = INCREMENT_PRODUCT_IN_CART;

    public constructor(public readonly payload: ICartProduct) {}
}

export class DecrementProductInCart {
    public readonly type = DECREMENT_PRODUCT_IN_CART;

    public constructor(public readonly payload: ICartProduct) {}
}
