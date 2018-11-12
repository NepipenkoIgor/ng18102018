import { Component, ViewEncapsulation } from '@angular/core';
import { data } from './data';

// [ ] => cвязывание(передача) данных из класса в шаблон  (свойство/аттрибут)
// ( ) => cвязывание(передача) данных из шаблон в класс (событие)

@Component({
    selector: 'course-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public text = '';
    public logoPNG = 'img/logo.png';

    public products$ = data;

    public searchByTerm(text: string): void {
        this.text = text;
    }
}
