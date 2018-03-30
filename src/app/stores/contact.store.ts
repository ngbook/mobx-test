import { Injectable } from '@angular/core';
import {
    observable,
    computed,
    action,
} from 'mobx';
import { ContactsService } from '../services/contacts.service';

export interface Model {
    username: string;
    avatar: string;
}

export class Contact {
    @observable
    username: string;

    @observable
    avatar: string;

    constructor(inits: Model) {
        Object.assign(this, inits);
    }
}

@Injectable()
export class ContactStore {
    @observable
    contacts: Contact[] = [];

    @observable
    test = 'abc';

    constructor(private contactService: ContactsService) {}

    @action
    fetchContacts() {
        this.contactService.fetchList().toPromise().then(
            (data) => {
                if (data && data.length > 0) {
                    data.forEach(d => {
                        const contact = new Contact(d);
                        this.contacts.push(contact);
                    });
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }

    @computed
    get total() {
        return this.contacts.length;
    }
}
