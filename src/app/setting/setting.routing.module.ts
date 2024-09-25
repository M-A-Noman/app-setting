import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {
        path: 'account',
        loadChildren:()=>import('./account/account.module').then((m)=>m.AccountModule)
      },
      {
        path: 'setup',
        loadChildren:()=>import('./setup/setup.module').then((m)=>m.SetupModule)
      },
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
