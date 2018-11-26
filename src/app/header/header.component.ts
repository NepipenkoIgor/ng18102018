import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'course-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

    public _logo: string;

    public constructor(
        private _router: Router
    ) {}

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

    public goToSignUp(): void {
        this._router.navigate(['signup']);
    }

}
