import { Injectable } from '@angular/core';
import {
    observable,
    computed,
    action,
    runInAction,
} from 'mobx';
import { Contact, ContactStore } from './contact.store';

export interface Model {
    content: string;
    time: string;
    receiver?: Contact;
    sender?: Contact;
    type?: number; // 0:Normal，1:Auto
}

export class Msg {
    @observable
    content: string;

    @observable
    time: string;

    @observable
    receiver: Contact;

    @observable
    sender: Contact;

    type = 0; // 0:Normal，1:Auto

    constructor(inits: Model) {
        Object.assign(this, inits);
    }
}

@Injectable()
export class MsgStore {

    @observable
    msgs: Msg[] = [];

    constructor(private contactStore: ContactStore) {}

    @action
    sendMsg(msg: Msg) {
        this.msgs.push(msg);
    }

    @computed
    get curMsgs() {
        return this.msgs.filter(
            msg => msg.receiver === this.contactStore.receiver
                || msg.sender === this.contactStore.receiver);
    }
}
