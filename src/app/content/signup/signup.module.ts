import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitcherComponent } from './switcher/switcher.component';

@NgModule({
    declarations: [SignupComponent, SwitcherComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: SignupComponent
            }
        ])
    ]
})
export class SignupModule {}
