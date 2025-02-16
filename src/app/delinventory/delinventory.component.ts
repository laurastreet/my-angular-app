import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delinventory',
  imports: [FormsModule],
  template: `
    <main>
      <h2> {{ name }} </h2>
      <input type="text" [(ngModel)]="name" />
    </main>
    `,
  // templateUrl: './delinventory.component.html',
  styleUrl: './delinventory.component.css'
})
export class DelinventoryComponent {
  name='apples';

}
