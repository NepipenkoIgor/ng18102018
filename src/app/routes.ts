import { Route } from '@angular/router';
import { ProductsComponent } from './content/products/products.component';
import { OneProductComponent } from './content/products/one-product/one-product.component';
import { ProductsListComponent } from './content/products/products-list/products-list.component';
import { OneProductResolveService } from './content/products/one-product/one-product-resolve.service';
import { ChatComponent } from './common/components/chat/chat.component';

export const routes: Route[] = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            {
                path: '',
                component: ProductsListComponent
            },
            {
                path: ':id',
                component: OneProductComponent,
                data: {
                    title: 'One product page'
                },
                resolve: {
                    product: OneProductResolveService
                }
            },
            {
                path: '**',
                redirectTo: '/signup'
            }
        ]
    },
    {
        path: 'chat',
        component: ChatComponent,
        outlet: 'aux1'
    },
    {
        path: 'signup',
        loadChildren: './content/signup/signup.module#SignupModule'

    },
    {
        path: '**',
        redirectTo: 'products'
    }
];
