import { IProduct } from '../reducers/product.reducer';


export const GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';


export class GetProductsPending {
    public readonly type = GET_PRODUCTS_PENDING;
}

export class GetProductsSuccess {
    public readonly type = GET_PRODUCTS_SUCCESS;

    public constructor(public payload: IProduct[]) {}
}

export class GetProductsError {
    public readonly type = GET_PRODUCTS_ERROR;
}
