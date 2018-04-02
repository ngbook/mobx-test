import { Injectable } from '@angular/core';
import {
    observable,
    computed,
    action,
    reaction,
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

    constructor(private contactStore: ContactStore) {
        this.reactions();
    }

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

    reactions() {
        // side effects
        reaction(
            // 监测最新一条消息
            () => this.msgs[this.msgs.length - 1],
            // 已经发生变化，即有消息了
            (msg) => {
                const curReceiver = this.contactStore.receiver;
                // 如果是发送给当前好友的普通消息，则让好友自动回复
                if (!msg.type && msg.receiver === curReceiver) {
                    this.msgs.push(new Msg({
                        content: 'ok',
                        time: new Date().toLocaleString(),
                        sender: curReceiver,
                        type: 1,
                    }));
                }
        });
    }
}
