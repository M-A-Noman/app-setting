import { Component, Input, OnInit } from '@angular/core';
import { singleSettingOption } from '../../models/setting.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-setting-option',
  templateUrl: './setting-option.component.html',
  styleUrls: ['./setting-option.component.scss']
})
export class SettingOptionComponent implements OnInit {
  @Input('label')settingLabel:string='';
  @Input('subLabel')settingSubLabel:string='';
  @Input('options')settingOptions:string[]=[];
  @Input('defaultOption')settingDefaultOption:string='';
  @Input()settingOptionObject:singleSettingOption={label:'',subLabel:'',option:[],default:'',isContainEmail:false};

  @Input('controls') settingOptionFormGroup:FormGroup=new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    // console.log(this.settingOptionObject)
    // console.log( 'setting Froms',this.settingOptionFormGroup)
  }
  onOptionChanged(event:any){
    // this.settingOptionObject.default=
    this.settingOptionObject.default=event.target.value;
    // console.log(event.target.value)
  }
}
