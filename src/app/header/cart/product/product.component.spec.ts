import { ProductComponent } from './product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICartProduct } from '../../../store/reducers/cart.reducer';
import { By } from '@angular/platform-browser';

const product: ICartProduct = {
    '_id': '123',
    'title': 'BBB',
    'serial': 123,
    'author': 'REEBOK',
    'price': 1500,
    'src': 'img/asda',
    count: 1
};

describe('Product component', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProductComponent]
        });
        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        component.product = product;

        spyOn(component, 'decrementProduct')
            .and
            .callThrough();
        spyOn(component, 'incrementProduct')
            .and
            .callThrough();
        spyOn(component, 'removeProduct')
            .and
            .callThrough();

        spyOn(component.remove, 'emit')
            .and
            .callThrough();
        spyOn(component.increment, 'emit')
            .and
            .callThrough();
        spyOn(component.decrement, 'emit')
            .and
            .callThrough();

        fixture.detectChanges();
    });
    it('should increment', () => {
        const incrementProduct = fixture.debugElement.query(By.css('.count__increase'));
        incrementProduct.triggerEventHandler('click', component.product);
        fixture.detectChanges();

        expect(component.incrementProduct)
            .toHaveBeenCalledWith(product);
    });
});
