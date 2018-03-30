import {
    Component,
    ChangeDetectionStrategy,
    OnInit,
} from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { take } from 'rxjs/operators/take';
import { autorun } from 'mobx';

import { ContactStore } from './stores/contact.store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    constructor(public store: ContactStore) { }

    ngOnInit() {
        interval(1000).pipe(take(5)).subscribe(d => {
            this.store.fetchContacts(d);
        });
    }
}
