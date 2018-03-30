import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { ContactStore } from './stores/contact.store';
import { HttpClientModule } from '@angular/common/http';
import { ContactsService } from './services/contacts.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MobxAngularModule,
        HttpClientModule,
    ],
    providers: [
        ContactStore,
        ContactsService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
