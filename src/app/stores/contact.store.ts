import { Injectable } from '@angular/core';
import {
    observable,
    computed,
    action,
    runInAction,
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

    constructor(private contactService: ContactsService) {}

    @action
    fetchContacts(pageNo) {
        this.contactService.fetchList(pageNo)
            .subscribe((data) => {
                if (data && data.length > 0) {
                    runInAction(() => {
                        data.forEach(d => {
                            const contact = new Contact(d);
                            this.contacts.push(contact);
                        });
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
