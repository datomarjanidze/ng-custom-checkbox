import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CheckboxGroupData } from 'projects/ng-checkbox/src/lib/ng-checkbox-group/ng-checkbox-group.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formGroup = new FormGroup({
    checkbox: new FormControl(false, Validators.requiredTrue),
  });
  checkboxGroupData: CheckboxGroupData = [
    {
      id: 1,
      checked: false,
      label: 'NYC Thin Crust',
    },
    {
      id: 2,
      checked: false,
      label: 'Chicago Deep Dish',
    },
    {
      id: 3,
      checked: false,
      label: 'Neapolitan',
    },
    {
      id: 4,
      checked: false,
      label: 'Californian',
    },
    {
      id: 5,
      checked: false,
      label: 'Detroit',
    },
  ];
}
