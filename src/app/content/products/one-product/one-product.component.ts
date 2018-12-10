import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../common/services/product.service';

@Component({
    selector: 'course-one-product',
    templateUrl: './one-product.component.html',
    styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

    public constructor(
        private _activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        console.log(this._activatedRoute.snapshot);
        this._activatedRoute.params.subscribe(({ id }: { id: string }) => {
            console.log(id);
        });

        this._activatedRoute.queryParams.subscribe(({ project, title }: { project: string, title: string }) => {
            console.log(project, title);
        });

        this._activatedRoute.fragment.subscribe((fragment: string) => {
            console.log(fragment);
        });

        this._activatedRoute.data.subscribe(({ title, product }: { title: string, product: IProduct }) => {
            console.log(title);
            console.log(product);
        });

    }

}
