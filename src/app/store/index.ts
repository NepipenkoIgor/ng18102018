import { IProduct, productsReducer } from './reducers/product.reducer';
import { cartReducer, ICartProduct } from './reducers/cart.reducer';
import { IUser, userReducer } from './reducers/user.reducer';

export interface IStore {
    products: IProduct[];
    cart: ICartProduct[];
    user: IUser;
}

export const reducers = {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
};
