import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MobxAngularModule } from 'mobx-angular';

import { ContactStore } from '../stores/contact.store';
import { ContactsService } from '../services/contacts.service';

import { NgButtonModule } from 'ngbook-kits/ng-button';
import { LayoutComponent } from './layout.component';
import { ContactComponent } from '../contact/contact.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MsgComponent } from '../msg/msg.component';
import { MsgStore } from '../stores/msg.store';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        LayoutRoutingModule,
        NgButtonModule,
        MobxAngularModule,
    ],
    providers: [
        ContactStore,
        ContactsService,
        MsgStore,
    ],
    declarations: [
        ContactComponent,
        MsgComponent,
        LayoutComponent,
    ]
})
export class LayoutModule { }
