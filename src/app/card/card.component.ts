import { Component, Input } from '@angular/core';
import { IProduct } from '../data';

@Component({
    selector: 'course-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input()
    public product: IProduct;


    public dollarPrice(price: number): number {
        return price / 54;
    }
}
