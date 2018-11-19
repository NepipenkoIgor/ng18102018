import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from './common/services/product.service';

// [ ] => cвязывание(передача) данных из класса в шаблон  (свойство/аттрибут)
// ( ) => cвязывание(передача) данных из шаблон в класс (событие)

@Component({
    selector: 'course-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    public text = '';
    public logoPNG = 'img/logo.png';

    public products$;

    public constructor(
        @Inject(ProductService) private _productService: ProductService
    ) {}

    public ngOnInit(): void {
        this.products$ = this._productService.getProducts();
    }

    public searchByTerm(text: string): void {
        this.text = text;
    }
}
