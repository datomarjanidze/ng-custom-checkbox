import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgCheckboxModule } from '../../projects/ng-checkbox/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgCheckboxModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
