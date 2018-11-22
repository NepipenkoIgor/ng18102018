import { Route } from '@angular/router';
import { ProductsComponent } from './content/products/products.component';
import { SignupComponent } from './content/signup/signup.component';

export const routes: Route[] = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '**',
        redirectTo: 'products'
    }
];
