import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

let uid = 0;

@Component({
  selector: 'ng-checkbox',
  templateUrl: './ng-checkbox.component.html',
  styleUrls: ['./ng-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgCheckboxComponent),
      multi: true,
    },
  ],
})
export class NgCheckboxComponent implements ControlValueAccessor {
  @Input() checked = false;
  @Output() readonly checkedChange = new EventEmitter<boolean>();
  @Input() disabled = false;
  @Input() invalid = false;
  readonly uid = `app-checkbox-${++uid}`;
  controlValueAccessorChangeFn: (value: boolean) => void = () => {};

  constructor(private cd: ChangeDetectorRef) {}

  handleChange(): void {
    this.checked = !this.checked;
    this.controlValueAccessorChangeFn(this.checked);
    this.checkedChange.emit(this.checked);
    this.cd.detectChanges();
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(): void {}

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
