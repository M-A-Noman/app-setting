import { Component, OnInit } from '@angular/core';
import { SettingService } from './services/setting.service';
import { settingCategory } from '../shared/models/setting.model';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent  implements OnInit{
  currentTab: string = ''; // Set default tab
  constructor(private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.currentTab=(this.route.snapshot.firstChild?.url[0].path) as string;
  }
  setTab(tab: string): void {
    this.currentTab = tab;
    this.router.navigate([`setting/${tab}`],)
  }

  

}
