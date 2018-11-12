import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'course-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    public _logo: string;

    @Input()
    public set logo(value: string) {
        this._logo = `assets/${value}`;
    }


    @Output()
    public searchEvent$ = new EventEmitter();

    public search({ target }: KeyboardEvent): void {
        const { value: text } = target as HTMLInputElement;
        this.searchEvent$.emit(text);
    }

}
