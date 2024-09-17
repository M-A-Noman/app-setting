import { Component, Input, OnInit } from '@angular/core';
import { singleSettingOption } from '../../models/setting.model';

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
  @Input()settingOptionObject:singleSettingOption={label:'',subLabel:'',option:[],default:''};
  constructor() { }

  ngOnInit(): void {
    // console.log(this.settingOptionObject)
  }
  onOptionChanged(event:any){
    // this.settingOptionObject.default=
    this.settingOptionObject.default=event.target.value;
    // console.log(event.target.value)
  }
}
