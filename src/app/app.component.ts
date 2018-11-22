import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// [ ] => cвязывание(передача) данных из класса в шаблон  (свойство/аттрибут)
// ( ) => cвязывание(передача) данных из шаблон в класс (событие)

@Component({
    selector: 'course-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    public logoPNG = 'img/logo.png';
    public safeLog;
    public logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==';
    public safeTooltip;
    public tooltip = '<span style="color:red;font-size:46px;">Alert</span>';

    public constructor(
        private _domSanitazer: DomSanitizer,
        @Inject('SizeService') private _sizeService: any
    ) {}

    public ngOnInit(): void {
        this._sizeService.run();
        // this.safeLog = this._domSanitazer.bypassSecurityTrustUrl(this.logo);
        // this.safeTooltip = this._domSanitazer.bypassSecurityTrustHtml(this.tooltip);
    }

}
