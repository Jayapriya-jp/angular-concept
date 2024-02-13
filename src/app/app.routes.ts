import { Routes } from '@angular/router';
import { title } from 'process';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AngularConceptComponent } from './angular-concept/angular-concept.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [
    {
        path:'parent',
        title:'parent component',
        component:ParentComponent,

    },
     {
        path:'child',
        title:'child component',
        component:ChildComponent,

    },
     {
        path:'angular-concept',
        title:'angular-concept component',
        component:AngularConceptComponent,

    }, 
    {
        path:'Home',
        title:'Home component',
        component:HomeComponent,

    },
    {
        path:'form',
        title:'form component',
        component:FormComponent,

    },
    {
        path:'pipes',
        title:'pipes component',
        component:PipesComponent,

    },
];
