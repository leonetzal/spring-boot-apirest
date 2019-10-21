import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Bienvenido a Angular';

  project: string = 'Angular Project 8';
  author: string = 'Leonardo Lucio Perez';
}
