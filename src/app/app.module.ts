import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './content/products/products-list/card/card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BASE_URL, BASE_URL_TOKEN } from './config';
import { ViewportService } from './common/services/viewport.service';
import { InterceptorService } from './common/services/interceptor.service';
import { ProductsComponent } from './content/products/products.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { OneProductComponent } from './content/products/one-product/one-product.component';
import { ProductsListComponent } from './content/products/products-list/products-list.component';
import { OneProductResolveService } from './content/products/one-product/one-product-resolve.service';
import { CustomPreloadServiceService } from './common/services/custom-preload-service.service';
import { ChatComponent } from './common/components/chat/chat.component';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effect/products.effect';
import { ProductService } from './common/services/product.service';
import { CartComponent } from './header/cart/cart.component';
import { ProductComponent } from './header/cart/product/product.component';
import { CdComponent } from './content/cd/cd.component';
import { DefaultComponent } from './content/cd/default/default.component';
import { OnPushComponent } from './content/cd/on-push/on-push.component';
import { FormsModule } from '@angular/forms';

// declarations => let / const
// imports => import { BrowserModule } from '@angular/platform-browser';
// exports => export const
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CardComponent,
        ProductsFilterPipe,
        TooltipDirective,
        ProductsComponent,
        OneProductComponent,
        ProductsListComponent,
        ChatComponent,
        CartComponent,
        ProductComponent,
        CdComponent,
        DefaultComponent,
        OnPushComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadServiceService }),
        EffectsModule.forRoot([ProductsEffects]),
        StoreModule.forRoot(reducers),
        environment.production
            ? []
            : StoreDevtoolsModule.instrument()
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        },
        ProductService,
        OneProductResolveService,
        CustomPreloadServiceService,
        {
            provide: BASE_URL_TOKEN,
            useValue: BASE_URL,
        },
        {
            provide: 'BASE_URL',
            useValue: 'localhost:3000',
        },
        ViewportService,
        {
            provide: 'SizeService',
            useFactory: (view: ViewportService) => {
                return view.determineService();
            },
            deps: [ViewportService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
