import { Component, OnDestroy, OnInit } from '@angular/core';
import { settingCategory, settings, singleSettingObject } from 'src/app/shared/models/setting.model';
import { SettingService } from '../../services/setting.service';
import { forkJoin, Subscription } from 'rxjs';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit ,OnDestroy{
   settingKeys:string[]=[
    
  ];
   settingKeys2:string[]=[
    
  ];
  settingSubscription:Subscription=new Subscription();
  settingData:settingCategory={};
  settingData2:settings={};
  settingDataObjects:singleSettingObject[]=[];
  constructor(public settingService:SettingService) { }

  ngOnInit(): void {
    this.fetchAllSettingsData();
   
  }
  fetchAllSettingsData() {
   
    this.settingSubscription=this.settingService.getSettingData('data').subscribe((res)=>{
      this.settingData=res;
      this.settingKeys=this.settingService.getSettingsKeys(this.settingData);
    })
    this.settingService.getSettingData2('data2').subscribe((res)=>{
     
       this.settingData2=res;
      this.settingKeys2=this.settingService.getSettingsKeys(this.settingData2);
     
    });
  }

  ngOnDestroy(): void {
      this.settingSubscription.unsubscribe()
  }
}
