import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import { reaction } from 'mobx';

import { MsgStore, Msg } from '../stores/msg.store';
import { ContactStore } from '../stores/contact.store';

@Component({
    selector: 'app-msg',
    templateUrl: './msg.component.html',
    styleUrls: ['./msg.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MsgComponent implements OnInit {
    text = '';

    constructor(public msgStore: MsgStore,
        public contactStore: ContactStore) { }

    ngOnInit() {
        // side effects
        let msgsLen = this.msgStore.msgs.length;
        reaction(
            () => this.msgStore.msgs.filter(msg => !msg.type).length,
            (curLen) => {
            if (msgsLen < curLen) {
                msgsLen = curLen;
                this.msgStore.msgs.push(new Msg({
                    content: 'ok',
                    time: new Date().toLocaleString(),
                    sender: this.contactStore.receiver,
                    type: 1,
                }));
            }
        });
    }

    sendMsg() {
        if (!this.text.trim()) {
            return;
        }
        this.msgStore.sendMsg(
            new Msg({
                content: this.text,
                time: new Date().toLocaleString(),
                receiver: this.contactStore.receiver,
            })
        );
        this.text = '';
    }
}
