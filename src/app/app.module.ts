import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ProductService } from './common/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { BASE_URL, BASE_URL_TOKEN } from './config';

// declarations => let / const
// imports => import { BrowserModule } from '@angular/platform-browser';
// exports => export const
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CardComponent,
        ProductsFilterPipe,
        TooltipDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        ProductService,
        {
            provide: BASE_URL_TOKEN,
            useValue: BASE_URL,
        },
        {
            provide: 'BASE_URL',
            useValue: 'localhost:3000',
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
