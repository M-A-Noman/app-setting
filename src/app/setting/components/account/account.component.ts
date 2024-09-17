import { Component, OnInit } from '@angular/core';
import { singleSettingObject } from 'src/app/shared/models/setting.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accountObject:singleSettingObject={label:'Account setting',subLabel:'Applied to your profile'}
  constructor() { }

  ngOnInit(): void {
  }

}
