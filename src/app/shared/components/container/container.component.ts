import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {  settingCategory, settings, singleSettingObject, singleSettingOption } from '../../models/setting.model';
import { SettingService } from 'src/app/setting/services/setting.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input()settingObjectName:string='';
  @Input()settingsObject:settingCategory={};

  settingName:string[]=[];
  singleSettings:singleSettingObject[]=[];
  isChips:boolean=false;

  emails:any={};
  settingOptionObject:singleSettingOption[]=[];


  constructor(private settingService:SettingService) { }


  ngOnInit(): void {
    if(this.settingsObject){
      
      this.settingName=this.settingService.getSettingsKeys(this.settingsObject);
     
      for(let key of this.settingName){
        
        if(key==='email'){
          this.isChips=true;
         this.emails=this.settingsObject[key];
        }
       
        this.singleSettings.push(this.settingsObject[key]);
      }
    }
  }
  
  createObjectTypeOption(item:singleSettingOption|string){
    let settingOptionSingleObject:singleSettingOption;
    if(typeof item !=='string'){
      settingOptionSingleObject= item;
      // console.log('setting object for setting',name,'\n',this.settingOptionObject)
    }else{
      settingOptionSingleObject={label:'',subLabel:'',option:[],default:''};
    }
    return settingOptionSingleObject;
     
  }
  isEmpty(obj:singleSettingObject){
    return Object.keys(obj).length === 0
  }

  onSaveSettings(){
   let updatedSettingObject:settings={

   };
    let i=0;
    for(let setting of this.singleSettings){
      const name=this.settingName[i];
      
      if(!updatedSettingObject[this.settingObjectName]){
        updatedSettingObject[this.settingObjectName]={}
      };
      updatedSettingObject[this.settingObjectName][name]=setting
      i++;
    }
    console.log((updatedSettingObject))



  // let updatedSettingObject: settings = {};

  // // Iterate over singleSettings and settingName arrays together
  // this.singleSettings.forEach((setting, index) => {
  //   const settingName = this.settingName[index];

  //   // Build the setting category for each setting
  //   if (!updatedSettingObject[this.settingObjectName]) {
  //     updatedSettingObject[this.settingObjectName] = {}; // Initialize the category if not present
  //   }

  //   updatedSettingObject[this.settingObjectName][settingName] = setting;
  // });

  // console.log('Updated Setting Object: ', updatedSettingObject);
    let response =this.settingService.setSettingData(this.settingName[i],updatedSettingObject);
    response.subscribe((res)=>{console.log(res)})
  }
  getSettingsOptionObjects(singleSettingObject:singleSettingObject){
    this.settingOptionObject=[];
    let i=1;
    for(let key of this.settingService.getSettings(singleSettingObject)){
      
        this.settingOptionObject.push(this.createObjectTypeOption(singleSettingObject[key]))
    }
    return this.settingOptionObject
  }
  
}
