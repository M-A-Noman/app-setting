import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { settingCategory, settings, singleSettingObject, singleSettingOption } from 'src/app/shared/models/setting.model';
import { SettingService } from '../services/setting.service';
import { forkJoin, Subscription } from 'rxjs';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit, OnDestroy {

  settingSubscription: Subscription = new Subscription();
  settingData: settings = {};
  originalSettingData: settings = {}; 
  isChangedMap: { [key: string]: boolean } = {}; // Track changes for each mainObject

  constructor(public settingService: SettingService) {}

  ngOnInit(): void {
    this.fetchAllSettingsData();
  }

  fetchAllSettingsData() {
    this.settingSubscription.add(
      this.settingService.getSettingData2('settings').subscribe((res) => {
        this.settingData = res;
        this.originalSettingData = JSON.parse(JSON.stringify(res)); // Deep copy of original data
        this.initializeChangeTracking();
      })
    );
  }

  // Initialize change tracking for each mainObject (set all to false initially)
  initializeChangeTracking() {
    Object.keys(this.settingData).forEach(key => {
      this.isChangedMap[key] = false;
    });
  }

  originalOrder = (a: any, b: any): number => {
    return 0;
  };

  // Triggered when a setting is changed for a specific mainObject
  onSettingChange(mainObjectKey: string) {
    this.isChangedMap[mainObjectKey] = !this.areObjectsEqual(this.settingData[mainObjectKey], this.originalSettingData[mainObjectKey]);
  }

  // Compare the current settings with the original settings for each mainObject
  areObjectsEqual(obj1: any, obj2: any): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  // Handle saving changes for each mainObject
  onSaveSettings(updatedSettings: settingCategory, key: string) {
    // console.log(updatedSettings)
    let updatedSettingObject: settings = {
      [key]: updatedSettings
    };
    // console.log(updatedSettingObject);

    let response = this.settingService.setSettingData(key, updatedSettingObject);
    response.subscribe((res) => {
      // console.log(res);
      this.originalSettingData[key] = JSON.parse(JSON.stringify(updatedSettings));
      this.isChangedMap[key] = false;
    });
  }

  getEmail(emails: any) {
    return emails.option;
  }
  isValidOption(item:singleSettingOption |string){
      return typeof item !=='string'
  }
  isEmail(item:singleSettingOption|string){
    // console.log(item)
    return typeof item!=='string' && item.label!=='Email';
  }

  getSettingOptionObject(settingOptionObject: singleSettingOption | string) {
    return typeof settingOptionObject !== 'string' ? settingOptionObject : { label: '', subLabel: '', option: [], default: '' };
  }

  ngOnDestroy(): void {
    this.settingSubscription.unsubscribe();
  }
}
