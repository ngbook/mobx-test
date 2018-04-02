import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ContactComponent } from '../contact/contact.component';
import { MsgComponent } from '../msg/msg.component';

const routes: Routes = [{
    path: 'main',
    component: LayoutComponent,
    children: [{
            path: 'contacts',
            outlet: 'left',
            component: ContactComponent
        },
        {
            path: 'msg',
            outlet: 'right',
            component: MsgComponent,
        },
    ]}, {
        path: '**',
        redirectTo: '/main/(right:msg//left:contacts)',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
