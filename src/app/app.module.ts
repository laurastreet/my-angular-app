import { NgModule, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
//   declarations: [
//     AppComponent
//   ],
  imports: [
    BrowserModule,
    FormsModule, // Add this
  ],
//   providers: [],
//   bootstrap: [AppComponent]
})
export class AppModule {}
