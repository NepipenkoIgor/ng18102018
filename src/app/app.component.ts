import { Component, ViewEncapsulation } from '@angular/core';

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

    public searchByTerm(text: string): void {
        this.text = text;
    }
}
