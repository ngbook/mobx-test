import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { ContactStore } from './stores/contact.store';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MobxAngularModule,
    ],
    providers: [ContactStore],
    bootstrap: [AppComponent]
})
export class AppModule { }
