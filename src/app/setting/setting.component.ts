import { Component, OnInit } from '@angular/core';
import { SettingService } from './services/setting.service';
import { settingCategory } from '../shared/models/setting.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent  implements OnInit{
  currentTab: string = ''; 
  constructor(private router:Router){}
  ngOnInit(): void {
    this.currentTab=this.router.url;
    this.currentTab=this.currentTab.slice(1);
    
  }
  setTab(tab: string): void {
    this.currentTab = tab;
  }

  

}
