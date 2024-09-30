import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, FormGroup, FormControl } from '@angular/forms';

type singleSettingOptionForm = FormGroup<{
  label: FormControl<string>;
  subLabel: FormControl<string>;
  default: FormControl<string>;
  option: FormControl<string[]>;
}>;

type singleSettingObjectForm = FormGroup<{
  label: FormControl<string>;
  subLabel: FormControl<string>;
  highlighted: FormControl<string>;
} & { [key: string]: singleSettingOptionForm }>; // Make dynamic controls required to be `FormGroup`

type settingCategoriesForm = FormGroup<{
  [key: string]: singleSettingObjectForm;
}>;

type settingForm = FormGroup<{
  settings: settingCategoriesForm;
}>;






@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

 
  constructor(private fb:NonNullableFormBuilder) {}

  ngOnInit(): void {
  }

  
  
  }


