import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../../../common/services/product.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'course-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

    public text = '';
    public products$;

    public constructor(
        private _productService: ProductService,
        private _domSanitazer: DomSanitizer,
        @Inject('SizeService') private _sizeService: any
    ) {}

    public ngOnInit(): void {
        this._sizeService.run();
        // this.safeLog = this._domSanitazer.bypassSecurityTrustUrl(this.logo);
        // this.safeTooltip = this._domSanitazer.bypassSecurityTrustHtml(this.tooltip);
        this.products$ = this._productService.getProducts();
    }

    public searchByTerm(text: string): void {
        this.text = text;
    }

}
