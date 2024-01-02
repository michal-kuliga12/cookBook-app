import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomCheckboxComponent),
      multi: true,
    },
  ],
})
export class CustomCheckboxComponent implements ControlValueAccessor {
  onChange: any = () => {};
  onTouch: any = () => {};
  constructor() {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
    console.log('onChange: ' + fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
    console.log('onTouched: ' + fn);
  }

  checked: boolean = false;
  ingredientID!: number;
  writeValue(checked: boolean): void {
    this.checked = checked;
    console.log('writeValue: ' + checked);
  }
  onModelChange(e: boolean) {
    this.checked = e;
    this.onChange(e);
    console.log('onModelChange: ' + e);
  }
}
