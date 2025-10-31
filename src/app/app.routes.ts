import { Routes } from '@angular/router';
import { ControlFlow } from './components/control-flow/control-flow';
import { Attribute } from './components/attribute/attribute';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { User } from './components/user/user';
import { Notfound } from './components/notfound/notfound';
import { Photos } from './components/photos/photos';

export const routes: Routes = [
    {
        path:'', component:User, pathMatch:'full'
    },
    {
        path:'controlflow', component:ControlFlow
    },
    {
        path:'attribute', component:Attribute
    },
    {
        path:'data-binding', component:DataBinding
    },
    {
        path:'signal', component:Signal
    },  
    {
        path:'photos', component:Photos
    },
    {
        path:'**', component:Notfound
    }
];
