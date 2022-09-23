import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';

import { CheckboxGroupData } from './ng-checkbox-group.types';

@Component({
  selector: 'ng-checkbox-group',
  templateUrl: './ng-checkbox-group.component.html',
  styleUrls: ['./ng-checkbox-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgCheckboxGroupComponent {
  @Input() checkAllEnabled = false;
  @Input() checkAllValue = false;
  @Input() checkboxGroupData: CheckboxGroupData = [];

  constructor(private cd: ChangeDetectorRef) {}

  checkAll(): void {
    this.checkboxGroupData.forEach(
      (checkboxData) => (checkboxData.checked = this.checkAllValue)
    );
    this.cd.detectChanges();
  }
}
