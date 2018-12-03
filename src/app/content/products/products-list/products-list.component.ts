import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { IStore } from '../../../store';
import { GetProductsPending } from '../../../store/actions/products.action';
import { productsWithBonuses } from '../../../store/reducers/cart.reducer';

@Component({
    selector: 'course-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

    public text = '';
    public products$;

    public constructor(
        private _domSanitazer: DomSanitizer,
        @Inject('SizeService') private _sizeService: any,
        private _store: Store<IStore>
    ) {}

    public ngOnInit(): void {
        this._sizeService.run();
        // this.safeLog = this._domSanitazer.bypassSecurityTrustUrl(this.logo);
        // this.safeTooltip = this._domSanitazer.bypassSecurityTrustHtml(this.tooltip);
        this.products$ = this._store.select(productsWithBonuses);
        this._store.dispatch(new GetProductsPending());
    }

    public searchByTerm(text: string): void {
        this.text = text;
    }

}
