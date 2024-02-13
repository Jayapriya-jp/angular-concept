import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-concept',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './angular-concept.component.html',
  styleUrl: './angular-concept.component.scss'
})
export class AngularConceptComponent {
  message = '';
message123 ='';
  onMouseOver() {
    console.log('mouseover-event'+this.message+'-'+this.message123)
    this.message = 'Way to go 🚀';
  }
  greet() {
    console.log('Hello, there 👋');
    this.message123 = 'Hello, there 👋'
}
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
isEditable='false';
content ='true';

}
