import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';

import { ContactStore } from '../stores/contact.store';
import { autorun } from 'mobx';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {

    constructor(public store: ContactStore) { }

    ngOnInit() {
        this.store.fetchContacts(1);
    }

    selectContact(contact) {
        this.store.changeReceiver(contact);
    }
}
