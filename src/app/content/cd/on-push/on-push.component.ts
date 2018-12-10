import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { Profile } from '../cd.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'course-on-push',
    templateUrl: './on-push.component.html',
    styleUrls: ['./on-push.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {
    @Input()
    profile: Profile;
    @Input()
    stream: Observable<number>;

    public value: number;

    constructor(
        public _cd: ChangeDetectorRef,
        public _zone: NgZone,
    ) { }

    ngOnInit() {
        setTimeout(() => {
            this._cd.markForCheck();
        }, 6000);
    }

}
