import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting.routing.module';
import { SettingComponent } from './setting.component';
import { SetupComponent } from './components/setup/setup.component';
import { AccountComponent } from './components/account/account.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SettingComponent,
    SetupComponent,
    AccountComponent,

  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    SharedModule,
    HttpClientModule,
    
  ]
})
export class SettingModule { }
