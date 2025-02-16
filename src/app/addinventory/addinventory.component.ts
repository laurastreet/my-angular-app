import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addinventory',
  imports: [FormsModule],
  template: `
    <main>
      <h2> {{ productName }} </h2>
      <input type="text" [(ngModel)]="productName" />

      <h2> {{ quantity }} </h2>
      <input type="text" [(ngModel)]="quantity" />

      <h2> {{ price }} </h2>
      <input type="text" [(ngModel)]="price" />
    </main>
    `,
  // templateUrl: './addinventory.component.html',
  styleUrl: './addinventory.component.css'
})
export class AddinventoryComponent {
  productName='apples';
  quantity='16';
  price='1.15';
}
