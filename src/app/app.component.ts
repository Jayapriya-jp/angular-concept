import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { AngularConceptComponent } from './angular-concept/angular-concept.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { PipesComponent } from './pipes/pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent,ParentComponent,AngularConceptComponent,NavComponent,HomeComponent,FormComponent,PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 city = 'bangalore';
 username='priya';  
 isLoggedIn = false;
 users = [
  {id: 0, name: 'Sarah'},
  {id: 1, name: 'Amy'},
  {id: 2, name: 'Rachel'},
  {id: 3, name: 'Jessica'},
  {id: 4, name: 'Poornima'},
];
isEditable='true';
content ='true';

}
