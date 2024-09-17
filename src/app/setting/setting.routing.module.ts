import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { SetupComponent } from './components/setup/setup.component';

const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'setup',
        component: SetupComponent
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
