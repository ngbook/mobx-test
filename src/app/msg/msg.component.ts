import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';

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
