import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgCheckboxModule } from '../../projects/ng-checkbox/src/public-api';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, NgCheckboxModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
