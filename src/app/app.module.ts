import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ProductService } from './common/services/product.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BASE_URL, BASE_URL_TOKEN } from './config';
import { ViewportService } from './common/services/viewport.service';
import { InterceptorService } from './common/services/interceptor.service';
import { ProductsComponent } from './content/products/products.component';
import { SignupComponent } from './content/signup/signup.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

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
        SignupComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        },
        ProductService,
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
