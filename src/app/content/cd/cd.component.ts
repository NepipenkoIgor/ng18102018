import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

export class Profile {
    public constructor(
        public firstName: string,
        public lastName: string,
    ) {

    }

    public lastChanged(): Date {
        return new Date();
    }
}

@Component({
    selector: 'course-cd',
    templateUrl: './cd.component.html',
    styleUrls: ['./cd.component.css']
})
export class CdComponent implements OnInit {

    public profile1: Profile;
    public profile2: Profile;
    public stream$: Observable<number> = interval(1000);

    ngOnInit() {
        this.profile1 = new Profile('Igor', 'Nepipenko');
        this.profile2 = new Profile('Vladimir', 'Loban');

        setTimeout(() => {
            this.profile1.firstName = 'Yugin';
            this.profile2 = new Profile('Igor', 'Nepipenko');
        }, 4000);

        const a = [1, 2, 3].map((value) => {
            return value * 5;
        });

    }

}
