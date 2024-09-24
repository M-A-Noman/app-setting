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
  settingSubscription:Subscription=new Subscription();
  settingData:settings={};
  settingDataObjects:singleSettingObject[]=[];
  constructor(public settingService:SettingService) { }

  ngOnInit(): void {
    this.fetchAllSettingsData();
   
  }
  fetchAllSettingsData() {
   
    this.settingService.getSettingData2('settings').subscribe((res)=>{
     
       this.settingData=res;
      this.settingKeys=this.settingService.getSettingsKeys(this.settingData);
     
    });
  }

  ngOnDestroy(): void {
      this.settingSubscription.unsubscribe()
  }
}
