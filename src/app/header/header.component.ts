import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'course-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public _logo: string;

    @Input()
    public set logo(value: string) {
        this._logo = `assets/${value}`;
    }


    @Output()
    public searchEvent$ = new EventEmitter();


    constructor() { }

    ngOnInit() {
    }

    public search({ target: { value: text } }: KeyboardEvent): void {
        this.searchEvent$.emit(text);
    }

}
