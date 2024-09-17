import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'

  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'setting',loadChildren:()=>import('./setting/setting.module').then((m)=>m.SettingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
