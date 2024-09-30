import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting.routing.module';
import { SettingComponent } from './setting.component';

import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SetupModule } from './setup/setup.module';
import { AccountModule } from './account/account.module';



@NgModule({
  declarations: [
    SettingComponent,
    

  ],
  imports: [
    SettingRoutingModule,
    SharedModule,
    HttpClientModule,
    SetupModule,
    AccountModule
    
  ]
})
export class SettingModule { }
