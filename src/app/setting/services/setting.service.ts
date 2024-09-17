import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { settingCategory, settings, singleSettingObject } from 'src/app/shared/models/setting.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http:HttpClient) { }
  getSettingData(endPoint:string){
     return this.http.get<settingCategory>(`${environment.BASE_URL}/${endPoint}`)
  }
  getSettingData2(endPoint:string){
     return this.http.get<settings>(`${environment.BASE_URL}/${endPoint}`)
  }

  setSettingData(endPoint:string,settingObject:settings){
    return this.http.patch<singleSettingObject>(`${environment.BASE_URL}/data2`,settingObject,{ headers: { 'Content-Type': 'application/json' } });
  }
  getSettingsKeys(settingData:settingCategory|singleSettingObject|settings){
    return Object.keys(settingData);
  }

  getSettings(singleSettingObject:singleSettingObject){
    // console.log(settingName)
    return Object.keys(singleSettingObject).filter(key=>key!=='label'&&key!=='subLabel');
    // return Object.keys(settingData[settingName]).filter(key=>key!=='label'&&key!=='subLabel');
  }
}
