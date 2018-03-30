import { Injectable } from '@angular/core';
import {
    observable,
    computed,
    action,
} from 'mobx';

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

    @action
    addContacts(contacts: Model[]) {
        contacts.forEach(data => {
            const contact = new Contact(data);
            this.contacts.push(contact);
        });
    }

    @computed
    get total() {
        return this.contacts.length;
    }
}
