import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'my-angular-app';
  // items: string[] = [];

  // onAdd(): void {
  //   // console.log('Add button clicked');
  //   // You can perform other actions here, like adding an item to a list
  //   this.items.push("New item");
  // }

  // onDelete(): void {
  //   // console.log('Add button clicked');
  //   // You can perform other actions here, like adding an item to a list
  //   // this.items.splice(index,1);
  // }

  // onUpdate(): void {
  //   console.log('Add button clicked');
  //   // You can perform other actions here, like adding an item to a list
  // }

  // onPrint(): void {
  //   console.log('Add button clicked');
  //   // You can perform other actions here, like adding an item to a list
  // }

  // onLowStockAlert(): void {
  //   console.log('Add button clicked');
  //   // You can perform other actions here, like adding an item to a list
  // }
}
