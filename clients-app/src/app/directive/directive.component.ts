import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html'
})
export class DirectiveComponent {

  listCourse: string[] = ['TypeScript', 'JavaScript', 'Java', 'C#', 'PHP'];

  enabled: boolean = true;

  constructor() { }

  setEnabled(): void {
    this.enabled = (this.enabled==true)? false: true;
  }

}
