import { Component, OnDestroy, OnInit } from '@angular/core';
import { settingCategory, settings, singleSettingObject, singleSettingOption } from 'src/app/shared/models/setting.model';
import { SettingService } from '../services/setting.service';
import {  Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit, OnDestroy {

  settingSubscription: Subscription = new Subscription();
  settingForm=this.fb.group({
    settings: this.fb.group({}) 
  });

  constructor(public settingService: SettingService,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.fetchAllSettingsData();
  }

  fetchAllSettingsData() {
    this.settingSubscription.add(
      this.settingService.getSettingData('settings').subscribe((res) => {
        this.settingForm = this.fb.group({
          settings: this.buildForm(res)
        });
      })
    );
  }

  onSubmit(formData: settingCategory, formGroup: any,key:any) {
    
    let updatedSettingObject: settings = {
      [key]: formData
    };

    this.settingService.setSettingData(key, updatedSettingObject).subscribe((res) => {});
    formGroup.markAsPristine();    
    formGroup.markAsUntouched();   
  }

// 

buildForm(controls:settings){
  const formGroup:FormGroup=this.fb.group({});
  Object.keys(controls).forEach((categoryKey)=>{
    console.log("Creating form group for:", categoryKey); 
    formGroup.addControl(categoryKey,(this.createCategoryFrom(controls[categoryKey])))
  })
  return formGroup;
}
createCategoryFrom(categoryControls:settingCategory){
  const formGroup:FormGroup=this.fb.group({});
  Object.keys(categoryControls).forEach((categoryObjectKey)=>{
    formGroup.addControl(categoryObjectKey,(this.createSingleSettingForm(categoryControls[categoryObjectKey])))
  })
  return formGroup;
}
createSingleSettingForm(singleSettingObjectControls:singleSettingObject){
  const formGroup:FormGroup=this.fb.group({
    label:singleSettingObjectControls.label,
    subLabel:singleSettingObjectControls.subLabel,
    highlighted:singleSettingObjectControls.highlighted
  });
  Object.keys(singleSettingObjectControls).forEach((singleSettingsKey)=>{
    let controls=singleSettingObjectControls[singleSettingsKey];
    if(typeof controls!=='string')
      {
        
        formGroup.addControl(singleSettingsKey,(this.createSingleSettingOptionForm(controls)))
      }
  })
  return formGroup;
}
createSingleSettingOptionForm(settingOptionObjectControls: singleSettingOption) {
  return this.fb.group({
    label: [settingOptionObjectControls.label],
    subLabel: [settingOptionObjectControls.subLabel],
    option: [settingOptionObjectControls.option],
    default: [settingOptionObjectControls.default],
    isContainEmail:[settingOptionObjectControls.isContainEmail]
  });
}

// 

  originalOrder = (a: any, b: any): number => {
    return 0;
  };


  isValidOption(item:singleSettingOption |string){
      return typeof item ==='object'
  }


  ngOnDestroy(): void {
    this.settingSubscription.unsubscribe();
  }



}
