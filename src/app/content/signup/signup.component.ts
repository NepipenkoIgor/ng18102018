import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'course-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    public account: FormGroup;

    constructor(
        private _fb: FormBuilder
    ) { }

    ngOnInit() {
        this.account = this._fb.group({
            firstName: ['', [Validators.required, this._nameValidator]],
            lastName: ['', [Validators.required], [this._nameAsyncValidator]],
            male: [true],
            age: [false],
            emails: this._fb.array([this._fb.control('')])
        });
    }


    public addEmail(): void {
        (this.account.get('emails') as FormArray).push(this._fb.control(''));
    }

    public removeEmail(i: number): void {
        (this.account.get('emails') as FormArray).removeAt(i);
    }

    private _nameValidator({ value }: FormControl): ValidationErrors | null {
        const valid: boolean = /^[a-zA-Z]*$/.test(value);
        return valid
            ? null
            : { nospecial: 'Только буквы' };
    }


    private _nameAsyncValidator({ value }: FormControl): Observable<ValidationErrors | null> {
        const valid: boolean = /^[a-zA-Z]*$/.test(value);
        const error = valid
            ? null
            : { nospecial: 'Только буквы' };

        return of<ValidationErrors | null>(error)
            .pipe(delay(5000));
    }
}
