import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgCheckboxComponent } from './ng-checkbox/ng-checkbox.component';
import { NgCheckboxGroupComponent } from './ng-checkbox-group/ng-checkbox-group.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [NgCheckboxComponent, NgCheckboxGroupComponent],
  exports: [NgCheckboxComponent, NgCheckboxGroupComponent, ReactiveFormsModule],
})
export class NgCheckboxModule {}
