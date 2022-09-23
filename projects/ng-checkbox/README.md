## ng-custom-checkbox

### Description

Simple checkbox and checkbox group components for Angular.
<br>
![Example](https://github.com/datomarjanidze/ng-custom-checkbox/blob/main/projects/ng-checkbox/checkbox-group-example.png?raw=true)

### Installation

```console
npm i ng-custom-checkbox
```

### Usage example

```typescript
import { NgCheckboxModule } from "ng-custom-checkbox";

@NgModule({
  imports: [NgCheckboxModule],
})
export class SomeModule {}
```

```typescript
import { CheckboxGroupData } from "ng-custom-checkbox";

@Component({})
export class AppComponent {
  formGroup = new FormGroup({
    checkbox: new FormControl(false, Validators.requiredTrue),
  });
  checkboxGroupData: CheckboxGroupData = [
    {
      id: 1,
      checked: false,
      label: "NYC Thin Crust",
    },
    {
      id: 2,
      checked: false,
      label: "Chicago Deep Dish",
    },
    {
      id: 3,
      checked: false,
      label: "Californian",
    },
    {
      id: 4,
      checked: false,
      label: "Neapolitan",
    },
    {
      id: 5,
      checked: false,
      label: "Detroit",
    },
  ];
}
```

```html
<form [formGroup]="formGroup">
  <ng-checkbox formControlName="checkbox">Check</ng-checkbox>

  <ng-checkbox-group
    [checkAllEnabled]="true"
    [checkboxGroupData]="checkboxGroupData"
  ></ng-checkbox-group>
</form>
```

### NgCheckboxComponent specs

<table>
  <thead>
    <tr>
      <th>Decorator</th>
      <th>Property Name</th>
      <th>Type</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>@Input</td>
      <td>checked</td>
      <td>boolean</td>
    </tr>
    <tr>
      <td>@Output</td>
      <td>checkedChange</td>
      <td>EventEmitter<boolean></td>
    </tr>
    <tr>
      <td>@Input</td>
      <td>disabled</td>
      <td>boolean</td>
    </tr>
    <tr>
      <td>@Input</td>
      <td>invalid</td>
      <td>boolean</td>
    </tr>
  </tbody>
</table>

### NgCheckboxGroupComponent specs

<table>
  <thead>
    <tr>
      <th>Decorator</th>
      <th>Property Name</th>
      <th>Type</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>@Input</td>
      <td>checkAllEnabled</td>
      <td>boolean</td>
    </tr>
    <tr>
      <td>@Input</td>
      <td>checkboxGroupData</td>
      <td>CheckboxGroupData</td>
    </tr>
  </tbody>
</table>

### Contributing

If something does not work or you want to improve the package, feel free
to create an issue on GitHub.

### License

ISC
