import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IProduct {
    '_id': string;
    'title': string;
    'serial': number;
    'author': string;
    'price': number;
    'src': string;
}

const _data: IProduct[] = [
    {
        '_id': '58e1f80939d7162e9a0a9eb0',
        'title': 'Обои 1',
        'serial': 1045,
        'author': 'Antonia Vella',
        'price': 12.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f809711416f3d8c0a7ad',
        'title': 'Обои 2',
        'serial': 1045,
        'author': 'Antonia Vella',
        'price': 2000.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f809fd6385dd5adc1baa',
        'title': 'Обои 3',
        'serial': 1045,
        'author': 'Fromental',
        'price': 1111.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f809438ccc28b805ea3b',
        'title': 'Обои',
        'serial': 1045,
        'author': 'Fromental',
        'price': 333.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f809a8fd877d977d9e22',
        'title': 'Обои 4',
        'serial': 1045,
        'author': 'Fromental',
        'price': 1666.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f80962fd2c3cb475978d',
        'title': 'Обои 10',
        'serial': 1045,
        'author': 'Antonia Vella',
        'price': 222.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f809473528b3533131d0',
        'title': 'Обои 5',
        'serial': 1045,
        'author': 'Fromental',
        'price': 1500.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f809c0b34dc771346a57',
        'title': 'Обои 22',
        'serial': 1045,
        'author': 'Arcadia',
        'price': 2211.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f80996409af652ff5997',
        'title': 'Обои 223',
        'serial': 1045,
        'author': 'Antonia Vella',
        'price': 1256.85,
        'src': 'assets/img/img1.jpg'
    },
    {
        '_id': '58e1f8095d5bc87ca60def1c',
        'title': 'Обои 56',
        'serial': 2342,
        'author': 'Arcadia',
        'price': 1500.85,
        'src': 'assets/img/img1.jpg'
    }
];


export const data: Observable<IProduct[]> = of(_data)
    .pipe(
        delay(4000)
    );
